import React from "react";
import Cards from "./Country/Cards";
import Nav from "./Navbar";
import "./Home.css";

export default function Home(){

	return <div className="Home">
			<Nav/>
			<Cards/>
	</div>
}
