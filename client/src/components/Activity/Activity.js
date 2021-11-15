import React from "react";
import Nav from "../Navbar"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getCountry, addActivity } from "../../store/actions";
import "./Activity.css";



export default function Activity() {

	const country = useSelector((state)=>state.countries)
	const dispatch = useDispatch()
	const [inputBody , setInputBody] = useState({
		name:"",
		difficulty:"",
		duration:"",
		season:"",
		precio:"",
		idCountry:[]
	})

	useEffect(()=>{
		dispatch(getCountry())
	},[dispatch]);

	function handelInput(e){
		e.preventDefault()
		setInputBody({
			...inputBody,
			[e.target.name]:e.target.value
		})

	}

	function handelSelect(e){
		e.preventDefault()
		setInputBody({
			...inputBody,
			[e.target.name]:e.target.value
		})
	}

	function handelSelecCountry(e){
		e.preventDefault()
		setInputBody({
			...inputBody,
			idCountry:[...inputBody.idCountry, e.target.value]
		})
	}

	function handelSubmit(e){
		e.preventDefault()
		dispatch(addActivity(inputBody))
		alert("actividad creada")
		setInputBody({
			name:"",
			difficulty:"",
			duration:"",
			season:"",
			idCountry:[]
		})
	}

	function handelDelete(e){
		setInputBody({
			...inputBody,
			idCountry: inputBody.idCountry.filter(r=> r!==e)
		})	
	}

	return <div>
		<Nav/>
		<form onSubmit={e=>handelSubmit(e)} className="formulario">
			<div>
			<label>name</label>
			<input type="text" 
			name="name" 
			value={inputBody.name} 
			onChange={e=>handelInput(e)}
			required/>
			</div>

			<div>
			<label>Difficulty</label>
			<select name="difficulty" onChange={e=>handelSelect(e)}>
			<option>-</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			</select>
			</div>

			<div>
			<label>Duration</label>
			<select name="duration" onChange={e=>handelSelect(e)}>
			<option>-</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
			<option value="20">20</option>
			<option value="21">21</option>
			<option value="22">22</option>
			<option value="23">23</option>
			<option value="24">24</option>
			</select>
			</div>

			<div>
			<label>Season</label>
			<select name="season" onChange={e=>handelSelect(e)}>
			<option>-</option>
			<option value="summer">summer</option>
			<option value="autumn">autumn</option>
			<option value="winter">winter</option>
			<option value="spring">spring</option>
			</select>
			</div>

			<div>
			<label>Precio</label>
			<input type="text" 
			name="precio" 
			value={inputBody.precio} 
			onChange={e=>handelInput(e)}
			required/>
			</div>

			<div>
			<label>Countries</label>
			<select onChange={e=>handelSelecCountry(e)}>
			<option>-</option>
			{country.map((e)=>(
				<option value={e.id}>{e.name}</option>))
			}
			</select>
			</div>
			<button type="submit">Add</button>
		</form>
		{inputBody.idCountry.map(e=>
			<div>
			<p>{e}</p>
			<button onClick={()=>handelDelete(e)}>x</button>
			</div>)}
	</div>
}