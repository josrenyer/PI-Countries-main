import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css"
import Logo from "./Imagen/logofinal.png";

export default function Nav(){
	return <nav className="navmenu">
		<img className="logo" src={Logo}/>
			<ul className="menu">
				<li><Link to="/Home"><h2>Home</h2></Link></li>
				<li><Link to="/AddActivity"><h2>Add Activity</h2></Link></li>
			</ul>
	</nav>
}
