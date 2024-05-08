import React from 'react'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom'
const CategoryList = () => {
  return (
    <>
      <nav>
        <Link to={'/'}><img src={logo} alt="" className='logo' /></Link>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/Envios">Envios</Link></li>
            
          </ul>
        </nav>
        
      </>
      )
}

      export default CategoryList