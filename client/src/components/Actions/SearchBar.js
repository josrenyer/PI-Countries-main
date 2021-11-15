import {React, useState} from "react";
import {searchCountry} from "../../store/actions"
import {useDispatch} from "react-redux";

export default function Search () {

	const [search, setSearch]=useState("");
	const dispatch = useDispatch()

	function handelSearch(){
		dispatch(searchCountry(search))
	}

	function handelReset(){
		dispatch(searchCountry(""))

	}
	
	function handelInput(e){
		e.preventDefault();
		setSearch(e.target.value)
	}

	return <div className="buscador">
			<input type="text" onChange={e=>handelInput(e)} placeholder="Enter Country"/>
			<button onClick={()=>handelSearch()}>Search</button>
			<button onClick={()=>handelReset()}>Reset</button>
	</div>
}  