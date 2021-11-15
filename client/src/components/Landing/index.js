import React from "react";
import "./Landing.css";
import {Link} from "react-router-dom";


function Landing(){
	return(
		<div className="inicio">
			<div className="centrar">
				<h1>Welcome to my PI-Countries</h1>
				<Link to="/Home"><button>Enter here</button></Link>
			</div>
		</div>
	);
};

export default Landing;