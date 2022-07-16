import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getCountriesDetail } from "../../store/actions";
import { useParams} from "react-router-dom";
import Nav from "../Navbar"
import Footer from "../Footer"
import CardActivityDetail from "./CardActivityDetail"
import "../Css/CardDetail.css"

export default function CardDetail (){

	const country=useSelector((state)=>state.countryDetail)
	const dispatch=useDispatch()
	let {id}=useParams();
	
	useEffect(()=>{
		dispatch(getCountriesDetail(id))
	},[dispatch, id])

	return <div className="CardDetail">
		<Nav/>
		<div className="CardContenido">
			<div className="CardText">
				<h2>{country.name}</h2>
				<h3>Continente: {country.continent}</h3>
				<h3>Capital: {country.capital}</h3>
				<h3>Subregion: {country.subregion}</h3>
				<h3>Area: {country.area}</h3>
				<h3>Población: {country.population} Personas</h3>
			</div>
			<div className="CardContenidoImg">
				<img src={country.image} alt="img not found" width="250px" height="150px"/>
			</div>
		</div>
		<div>
			<CardActivityDetail activities={country.activities}/>
		</div>

		<Footer/>
	</div>
}