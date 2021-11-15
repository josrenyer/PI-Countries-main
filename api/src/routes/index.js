const { Router } = require('express');
const {Country, Activity} = require("../db");
const {Op} = require("sequelize");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", async(req, res, next)=>{
	try{
		let name=req.query.name;

		if(name){
			let nameCountries=await Country.findAll({
				where:{
					name:{
						[Op.iLike]: "%"+name+"%"
					}
				},
				include:Activity,
			})
			if(!nameCountries[0]){
				res.status(404).send({Data: "El Nombre de Pais No esta en nuestra Base de Datos"})
			}
			res.send(nameCountries)
		}else{
			let allCountries = await Country.findAll({
				include:Activity
			})
			res.send(allCountries)
		}
	}
	catch(err){
		next(err)
	}
})

router.get("/countries/:id", async (req,res,next)=>{
	try{
		let id=req.params.id.toUpperCase();
		let paisFiltrado

		if(typeof id==="string" && id.length ===3){

			paisFiltrado=await Country.findByPk(id,{include:Activity})

			if(paisFiltrado){
				res.send(paisFiltrado)
			}else{
				res.status(409).send({Error:"El id ingresado no existe, por favor intente con otro"})
			}
		}else{
			res.status(411).send({Error:"Ingrese un dato de 3 letras. No se permiten numeros"})
		}
	}
	catch(err){
		next(err)
	}
})

router.post("/activity", async(req,res,next)=>{
	try{
		let {name, difficulty, duration, season, idCountry, precio}=req.body;

		if(name && difficulty && duration && season && idCountry && precio){

			if(difficulty > 0 && difficulty < 6){

				if(season === 'summer' || season === 'autumn' || season === 'winter' || season ==='spring'){


						let searchId=await Country.findAll({
							where:{
								id: idCountry
							}
						});

						if(!searchId[0]){
							return res.status(409).send("Por favor ingrese un ID de pais valido");

						}else{
							let newActivity=await Activity.create({
									name,
									difficulty,
									duration,
									season,
									precio
							});
							newActivity.addCountries(searchId)
							res.send(newActivity)
						}
				
				}else{
						return res.status(408).send("Ingrese una temporada valida (summer,autumn,winter,spring)");
				}
			}else{
				return res.status(409).send("Por favor ingrese una dificulta en numeros del 1 al 5");
			}
		}else{
			res.status(410).send({Error:"Por Favor rellene todos los campos para crear la actividad"})
		}
	}
	catch(err){
		next(err)
	}
})

router.get("/activity", async(req,res)=>{
	let respuesta= await Activity.findAll()
	res.send(respuesta)
})


module.exports = router;
