import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Styles/navBar.css'
const NavBar = () => {
  return (
    <div className='navBar'>
        <nav>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Agendas</a></li>
                <li><a href="">Cuadernos</a></li>
                <li><a href="">Envios</a></li>
            </ul>
        </nav>
        <CartWidget/>
    </div>
    
  )
}

export default NavBar