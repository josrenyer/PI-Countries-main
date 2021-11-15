import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getCountriesDetail } from "../../store/actions";
import { useParams} from "react-router-dom";
import Nav from "../Navbar"
import CardActivityDetail from "./CardActivityDetail"

export default function CardDetail (){

	const country=useSelector((state)=>state.countryDetail)
	const dispatch=useDispatch()
	let {id}=useParams();
	useEffect(()=>{
		dispatch(getCountriesDetail(id))
	},[id])

	return <div>
		<Nav/>
		<div>
			<h3>{country.id}</h3>
			<h1>{country.name}</h1>
			<div><img src={country.image} alt="img not found" width="250px" height="150px"/></div>
			<h3>Continent: {country.continent}</h3>
			<h3>Capital: {country.capital}</h3>
			<h3>Subregion: {country.subregion}</h3>
			<h3>Area: {country.area}</h3>
			<h3>Population: {country.population} Persons</h3>
			<div>
				<CardActivityDetail activities={country.activities}/>
			</div>
		</div>
	</div>
}