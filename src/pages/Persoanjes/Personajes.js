import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardPersonaje from '../../componentes/CardPersonaje/CardPersonaje';

const Personajes = () => {

  const [character, setCharacter] = useState([]);
  const [personajeMujer, setPersonajeMujer] = useState([])
  const [personajeHombre, setPersonajeHombre] = useState([])
  const [personajeSgenero, setPersonajeSgenero] = useState([])
  const [robot, setRobot] = useState([])



  const apiPersonajes = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/?page=27')
    setCharacter(response.data.results)
  }

  const selectorGenero = (genero) => {
        if (genero === "Male") {
        setPersonajeMujer([])
        setPersonajeSgenero([])
        setRobot([])
        const hombres = character.filter(personaje => personaje.gender === "Male")
        setPersonajeHombre(hombres)
      } else if (genero === "Female") {
        setPersonajeSgenero([])
        setPersonajeHombre([])
        setRobot([])
        const mujeres = character.filter(personaje => personaje.gender === "Female")
        setPersonajeMujer(mujeres)
      } else if (genero === "unknown") {
        setPersonajeMujer([])
        setPersonajeHombre([])
        setRobot([])
        const sinGenero = character.filter(personaje => personaje.gender === "unknown")
        setPersonajeSgenero(sinGenero)
      } else {
        setPersonajeMujer([])
        setPersonajeHombre([])
        setPersonajeSgenero([])
        const robot = character.filter(personaje => personaje.gender === "Genderless" )
        setRobot(robot)
      }
  }

  const verTodos = () => {
    setPersonajeMujer([])
    setPersonajeHombre([])
    setPersonajeSgenero([])
    setRobot([])
  }


  useEffect(() => {
    apiPersonajes()
  }, [])

  return (
    <div className='container'>
      <h2 className='text-center text-uppercase text-white mb-3 mt-3'>personajes</h2>
      <form className="d-flex mb-3">
        <input className="form-control me-2" type="search" placeholder="Ingresa el nombre del personaje" aria-label="Search" />
        <button className="btn btn-primary border-light" type="submit">Buscar</button>
      </form>
      <p className='text-white text-center mt-2 mb-0'>Genero</p>
      <div className='checks d-flex justify-content-center mb-3'>
        <div className="form-check form-switch me-4">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={verTodos}/>
          <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked" >Todos</label>
        </div>
        <div className="form-check form-switch me-4">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => selectorGenero('Female')}/>
          <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Mujer</label>
        </div>
        <div className="form-check form-switch me-4">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => selectorGenero('Male')}/>
          <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Hombre</label>
        </div>
        <div className="form-check form-switch me-4">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => selectorGenero('Genderless')}/>
          <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Robots</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => selectorGenero('unknown')}/>
          <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">Sin genero</label>
        </div>
      </div>
      
      
      <div className='d-flex flex-wrap justify-content-between'>

        {
          personajeMujer.length > 0 ?
            personajeMujer.map(mujer => (
              <CardPersonaje key={mujer.id} {...mujer} />
            ))
          :
          personajeHombre.length > 0 ?
            personajeHombre.map(hombre => (
                <CardPersonaje key={hombre.id} {...hombre} />
            ))
          :
          robot.length > 0 ?
            robot.map(robot => (
                  <CardPersonaje key={robot.id} {...robot} />
            ))
          :
          personajeSgenero.length > 0 ?
            personajeSgenero.map(sGenero => (
                  <CardPersonaje key={sGenero.id} {...sGenero} />
            ))
          :
          character.length > 0 ?
            character.map(personaje => (
              <CardPersonaje key={personaje.id} {...personaje} />
            ))
          :
          <div className='container mb-4 text-success'>
            <div className='d-flex justify-content-center'>
              <strong>Loading...</strong>
            </div>
            <div className='d-flex justify-content-center'>
              <div className="spinner-border d-flex " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Personajes





      // <input type="text" className="form-control mb-3 w-50" placeholder='Busca tu personaje' />
      // <div className='d-flex mb-3'>
      //   <button className='btn btn-primary me-3' onClick={verTodos}>Ver todos</button>
      //   <button className='btn btn-primary me-3' onClick={() => selectorGenero('Male')}>Hombre</button>
      //   <button className='btn btn-primary me-3' onClick={() => selectorGenero('Female')}>Mujer</button>
      //   <button className='btn btn-primary' onClick={() => selectorGenero('unknown')}>Sin genero</button>
      // </div>