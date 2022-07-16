const { Router } = require('express');
const {Activity, Country} = require("../db");


const postActivity = async (req, res, next) => {
	try{
		let {name, difficulty, duration, season, price, recommendation, idCountry, img}=req.body;

		if(name && difficulty && duration && season && idCountry){

			if(difficulty > 0 && difficulty < 6){

				if(season === 'summer' || season === 'autumn' || season === 'winter' || season ==='spring'){


						let searchId=await Country.findAll({
							where:{
								id: idCountry
							}
						});

						if(!searchId[0]){
							return res.status(409).send({Data:"Por favor ingrese un ID de pais valido"});

						}else{
							let newActivity=await Activity.create({
									name,
									difficulty,
									duration,
									season,
									price,
									recommendation,
									img
							});
							newActivity.addCountries(searchId)
							res.send(newActivity)
						}
				
				}else{
						return res.status(408).send({Data:"Ingrese una temporada valida (summer,autumn,winter,spring)"});
				}
			}else{
				return res.status(409).send({Data:"Por favor ingrese una dificulta en numeros del 1 al 5"});
			}
		}else{
			res.status(410).send({Error:"Por Favor rellene todos los campos para crear la actividad"})
		}

	}catch(err){
		next(err)
	}
}

const getActivity = async (req, res, next) => {
	try{
	let respuesta= await Activity.findAll()
	res.send(respuesta)
	}catch(err){
		next(err)
	}
}

module.exports = {
    postActivity,
    getActivity
};