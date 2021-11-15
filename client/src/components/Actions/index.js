import React from "react"
import Search from "./SearchBar";
import Order from "./Order";
import FilterA from "./FilterActivity";
import FilterC from "./FilterContinent";
import "./action.css"

export default function Action(){
	return <div className="menu2">
		<Order/>
		<Search/>
		<FilterA/>
		<FilterC/>
	</div>
}