const { Router } = require('express');
const {Country, Activity} = require("../db");
const {Op} = require("sequelize");



const allCountry = async (req, res, next) => {
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
};

const CountryById = async (req, res, next) => {
    try{
        let id=req.params.id.toUpperCase();
        let countryfilter

        if(typeof id==="string" && id.length ===3){

            countryfilter=await Country.findByPk(id,{include:Activity})

            if(countryfilter){
                res.send(countryfilter)
            }else{
                res.status(409).send({Data:"El id ingresado no existe, por favor intente con otro"})
            }
        }else{
            res.status(411).send({Error:"Ingrese un dato de 3 letras. No se permiten numeros"})
        }
    }
    catch(err){
        next(err)
    }
}


module.exports = {
    allCountry,
    CountryById
};