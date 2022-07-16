import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getCountry, addActivity } from "../../store/actions";
import storage from "../../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Nav from "../Navbar"
import "../Css/Activity.css"
import Footer from "../Footer"


export default function Activity() {

const country = useSelector((state)=>state.countries)
	const order = country.sort(function (a, b) {
                      if (a.name > b.name) {
                        return 1;
                      }
                      if (a.name < b.name) {
                        return -1;
                      }
                      return 0;
                });
	
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const [inputBody , setInputBody] = useState({
		name:"",
		difficulty:"",
		duration:"",
		season:"",
		price:"",
		recommendation:"",
		image:null,
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
			price:"",
			recommendation:"",
			img:null,
			idCountry:[]
		})
		navigate("/Home")
	}

	function handelDelete(e){
		setInputBody({
			...inputBody,
			idCountry: inputBody.idCountry.filter(r=> r!==e)
		})	
	}

	async function handelImagen(e){
		e.preventDefault()
		const file=e.target.files[0];

		const path=ref(storage, `Fotos/${file.name}`)

		await uploadBytes(path, file)

		const getUrl= await getDownloadURL(path);

		//console.log("esta es la url", getUrl)
		
		setInputBody({
			...inputBody,
			[e.target.name]:getUrl
		})
	}

	return <div className="activity">

		<Nav/>

		<div className="containerForm">

			<h2>Agregar Actividad</h2>

			<br/>

			<form onSubmit={e=>handelSubmit(e)}>

				<div>
				<label><b>Nombre de la actividad</b></label>
				<input type="text" 
				name="name"
				value={inputBody.name} 
				onChange={e=>handelInput(e)}
				required/>
				</div>

				<div>
				<label><b>Dificulta</b></label>
				<select name="difficulty" onChange={e=>handelInput(e)}>
				<option>-</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				</select>
				</div>

				<div>
				<label><b>Duracion</b></label>
				<select name="duration" onChange={e=>handelInput(e)}>
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
				<label><b>Temporada</b></label>
				<select name="season" onChange={e=>handelInput(e)}>
				<option>-</option>
				<option value="summer">Verano</option>
				<option value="autumn">Otoño</option>
				<option value="winter">Invierno</option>
				<option value="spring">Primavera</option>
				</select>
				</div>

				<div>
				<label><b>Precio Aproximado</b></label>
				<input type="text" 
				name="price"
				value={inputBody.price} 
				onChange={e=>handelInput(e)} 
				required/>
				</div>

				<div >
        <label><b>Imagen</b></label>
        <input name="img" 
        accept="image/png,image/jpg"  
        type="file"
        onChange={e=>handelImagen(e)}/>
        </div>

				<div>
				<label><b>Paises</b></label>
				<select onChange={e=>handelSelecCountry(e)}>
				<option>-</option>
				{order.map((e)=>(
					<option  key={e.id} value={e.id}>{e.name}</option>))
				}
				</select>
				</div>

				<div>
				<label><b>Recomendación</b></label>
				<br/>
				<textarea name="recommendation" rows="5" cols="40" placeholder="Que hacer y no hacer" value={inputBody.recommendation} 
				onChange={e=>handelInput(e)} ></textarea>
				</div>


				<button type="submit">Agregar</button>

			</form>

			<div className="country">
				{inputBody.idCountry.map(e=>
				<div key={e}>
					<h3>{e}</h3>
					<button onClick={()=>handelDelete(e)}>x</button>
				</div>)}
			</div>

			</div>

		<Footer/>
	</div>
}