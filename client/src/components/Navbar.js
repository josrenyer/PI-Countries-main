import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Css/Navbar.css"
import Logo from "./Imagen/logopi.svg";
import Menu from "./Imagen/menu.svg"
import IconoHome from "./Imagen/iconoHome.svg"

export default function Nav(){

	const [open, setOpen]=useState(false)

	return <header>
			<nav className="navmenu">
				<div>
					<img className="logo" src={Logo} alt=""/>
				</div>
				<div className="menu" id={open ? "visible" : ""}>
					<ul>
						<li><h2><Link to="/Home" style={{textDecoration: "none", color:"#151414"}}><img  src={IconoHome} alt=""/></Link></h2></li>
						<li><h2><Link to="/AddActivity" style={{textDecoration: "none", color:"#151414"}}>Agregar Actividad</Link></h2></li>
					</ul>
				</div>
				<div className="icono">
      				<img  src={Menu} alt="" onClick={()=>setOpen(!open)}/>
      			</div>
			</nav>
	</header>
}
