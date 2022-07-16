import React from "react"
import Search from "./SearchBar";
import Order from "./Order";
import FilterA from "./FilterActivity";
import FilterC from "./FilterContinent";
import "../Css/Actions.css"


export default function Action(){
	return <div className="actions">
		<Order/>
		<Search/>
		<FilterA/>
		<FilterC/>
	</div>
}