import React from "react";
import {filterContinent} from "../../store/actions";
import {useDispatch} from "react-redux";

export default function FilterC(){

	const dispatch = useDispatch()

function handel(e){
	e.preventDefault()
	dispatch(filterContinent(e.target.value))
}

	return <select onChange={e=>handel(e)} className="filtrocontinente">
			<option value="all">Filter Continent</option>
			<option value="Antarctic">Antarctic</option>
			<option value="Americas">Americas</option>
			<option value="Asia">Asia</option>
			<option value="Africa">Africa</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
	</select>
}