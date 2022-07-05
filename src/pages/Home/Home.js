import React from 'react'
import Portada from '../../assets/img/portada.jpg'
import './Home.css';

const Home = () => {
  return (
    <div className='portada container mt-4 mb-4'>
        <img src={Portada} className="w-100" alt="portada_rick_and_morty" />
    </div>
  )
}

export default Home