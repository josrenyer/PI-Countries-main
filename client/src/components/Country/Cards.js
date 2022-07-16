import React from "react";
import Card from "./Card"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getCountry } from "../../store/actions";
import Pagination from "../Pagination/Pagination";
import "../Css/Cards.css"




export default function Cards(){

	const allCountry= useSelector((state)=>state.countries)  // me traigo todo los paises
	const dispatch = useDispatch()

	const[currentPage, setCurrentPage]=useState(1);
	const countriesPerPage=9;
	const indexOfLastCountries = currentPage * countriesPerPage;
	const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
	const currentCountries = allCountry.slice(indexOfFirstCountries,indexOfLastCountries);



	const paginado=(pageNumber)=>{
		setCurrentPage(pageNumber)
	}

	useEffect(()=>{
		dispatch(getCountry())
	},[dispatch])


	return <div>
		<Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} allCountry={allCountry.length} countriesPerPage={countriesPerPage} paginado={paginado}/>

		<div className="contenedorcartas">
			{currentCountries.map((e)=>{
				return <Card key={e.id} id={e.id} name={e.name} image={e.image} continent={e.continent}/>
			})}
		</div>
	</div>
}