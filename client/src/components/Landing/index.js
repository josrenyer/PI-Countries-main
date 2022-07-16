import React from "react";
import "./Landing.css";
import {Link} from "react-router-dom";
import Wave from "../Imagen/wave.svg";
import linkedin from "../Imagen/linkedin.svg";
import github from "../Imagen/github.svg";


function Landing(){
	return(
		<div className="contenedorLanding">
			<img src={Wave} className="wave" alt=""/>
			<div className="iconos">

				<a href="https://www.linkedin.com/in/jl-rangel-fullstackdeveloper/" rel="noreferrer" target="_blank">
					<img src={linkedin} alt=""/>
				</a>

				<a href="https://github.com/josrenyer" target="_blank" rel="noopener noreferrer">
					<img src={github} alt="" />
				</a>
			</div>
			<div className="text">
				<h1>PROYECTO PAÍSES</h1>
				<h4>José Rangel</h4>
				<Link to="/Home">
					<button>Entrar</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;