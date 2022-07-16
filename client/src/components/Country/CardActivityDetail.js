import React from "react";
import {Link} from "react-router-dom"
import "../Css/CardActivity.css"

export default function CardActivityDetail ({activities}){
    if (activities && activities.length > 0) {
        return (
            <div className="CardActivity">
                <div className="title">
                    <h3>Actividades en este país:</h3>
                </div>
                {activities && activities.map((e) => (
                    <div  key={e.id}className="CardContenidoActivity">
                        <p>Actividad: {e.name}</p>
                        <p>Duracion (hour): {e.duration}</p>
                        <p>Dificulta: {e.difficulty}</p>
                        <p>Temporada: {e.season}</p>
                        <p>Precio: {e.price}</p>
                        <p>Recomendacion: {e.recommendation}</p>
                        <p>Imagen:</p>
                        <div className="ActivityImg">
                            <img src={e.img} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        )
    } else {
        return (<div className="CardActivity">
            <div className="title">
                <h3>No se ha agregado actividades para este país</h3>
                <Link to='/AddActivity'>
                    <p style={{color:"black", marginTop:"15px"}} >Has Click aqui para agregar una actividad</p>
                </Link>
            </div>
        </div>
        )
    }
} 