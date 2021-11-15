const axios = require ("axios");
const { Country } = require('../db');
const urlapi= "https://restcountries.com/v3.1/all";

const loader=async()=>{
	const getapi= await axios.get(urlapi);
	const allCountry=getapi.data;
	try{
		allCountry.map(async(e)=>{
			await Country.findOrCreate({
				where:{
					id:e.cca3,
					name:e.name.common,
					image:e.flags.png,
					continent:e.region,
					capital:e.capital ? e.capital[0] : "No Hay capital",
					subregion:e.subregion ? e.subregion : "No hay Subregion",
					area:e.area+" Km2",
					population:e.population
				}
			})
		});
	}
	catch(err){
		console.log("En la DB hay el siguiente error",err)
	}
}

module.exports = {loader};