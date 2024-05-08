import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Styles/navBar.css'
import CategoryList from './CategoryList'
const NavBar = () => {
  return (
    <div className='navBar'>
     <CategoryList/>
      <CartWidget />
    </div>

  )
}

export default NavBar