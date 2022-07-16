import React from "react";
import Cards from "./Country/Cards";
import Nav from "./Navbar";
import Action from "./Actions"
import "./Css/Home.css"
import Footer from "./Footer.js"


export default function Home(){

	return <div className="Home">
			<Nav/>
			<Action/>
			<Cards/>
			<Footer/>
	</div>
}
