import React from "react";
import {Link} from "react-router-dom"
import "./actividad.css"

export default function CardActivityDetail ({activities}){
    if (activities && activities.length > 0) {
        return (
            <div>
                <h2>-----------------------</h2>
                <h3>Actividades en este país:</h3>
                <div>
                    {activities && activities.map((e) => (
                        <ul key={e.id} className="stilo">
                            <li>Name: {e.name}</li>
                            <li>Duration (hour): {e.duration}</li>
                            <li>Difficulty: {e.difficulty}</li>
                            <li>Season: {e.season}</li>
                            <li>precio: {e.precio}</li>
                            <li>-----------</li>
                        </ul>
                    ))}
                </div>
            </div>
        )
    } else {
        return <h3>No hay actividades en este Pais<Link to='/AddActivity'><p> Click here to add </p></Link></h3>
    }
}