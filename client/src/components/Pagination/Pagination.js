import React from "react";
import "./Pagination.css"

export default function Pagination ({allCountry,countriesPerPage, paginado}){
	const numberpage=[];

	for(var i=1; i<=Math.ceil(allCountry/countriesPerPage); i++){
		numberpage.push(i);
	}

	return <nav className="paginacion">
		<ul className='paginado'>
			{numberpage &&
				numberpage.map(number=>(
					<li key={number}>
					<a onClick={() => paginado(number)}>{number}</a>
					</li>
			))}
		</ul>
	</nav>
}