import React, {useState} from "react";
import "../Css/Pagination.css"


export default function Pagination ({allCountry,countriesPerPage, paginado, currentPage, setCurrentPage}){

	const pageNumberLimit=5;
	const[maxNumberLimit, setMaxNumberLimit]=useState(5);
	const[minNumberLimit, setMinNumberLimit]=useState(0);

	const numberpage=[];

	for(var i=1; i<=Math.ceil(allCountry/countriesPerPage); i++){
		numberpage.push(i);
	}


	const render=numberpage.map((number)=>{
		if(number < maxNumberLimit+1 && number > minNumberLimit){
			return (
			<li key={number} className={currentPage === number ? "active" : null}  onClick={() => paginado(number)}>
				{number}
			</li>
				)
		}else{
			return null;
		}
	}
	);

	function handlePrev(){
		if(currentPage === 1){
			setCurrentPage(1)
		}else{
		setCurrentPage(currentPage-1)

		if((currentPage - 1) % pageNumberLimit === 0){
			setMaxNumberLimit(maxNumberLimit - pageNumberLimit);
			setMinNumberLimit(minNumberLimit - pageNumberLimit);
		}
	}
	}

	function handleNext(){
		if(currentPage === numberpage.length){
			setCurrentPage(numberpage.length)
		}else{
		setCurrentPage(currentPage+1)

		if(currentPage+1 > maxNumberLimit){
			setMaxNumberLimit(maxNumberLimit + pageNumberLimit);
			setMinNumberLimit(minNumberLimit + pageNumberLimit);
		}
	}
	}

	return <nav className="paginacion">
		<ul className='paginado'>
			<li><button onClick={handlePrev}>Prev</button></li>
			{render}
			<li><button onClick={handleNext}>Next</button></li>
		</ul>
	</nav>
}