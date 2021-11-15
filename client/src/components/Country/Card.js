import React from "react";
import "./Card.css";
import {Link} from "react-router-dom";

export default function Card ({image, name, continent, id}){
	return  <div className="card">
			<Link to={`/countries/${id}`}>
				<img src={image} alt="img not found" width="250px" height="150px" />
				<h3>Pais: {name}</h3>
				<h3>Region: {continent}</h3>
			</Link>
	</div>
}
