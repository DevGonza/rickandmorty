import React from 'react'
import './CardPersonaje.css'

const CardPersonaje = (props) => {
    const {image, name, species, status, gender} = props
  return (
    <div className="card mb-3 border-primary border-3" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text mb-1">{gender}</p>
            <p className="card-text mb-1">{species}</p>
            <p className="card-text">Status: {status === "Alive" ? "Vivo" : props.status === "unknown" ? "desconocido" : "muerto"}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
  )
}

export default CardPersonaje