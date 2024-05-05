import React from 'react'
import carrito from './Assets/carrito.png'
import './Css/cartWidget.css'


const CartWidget = () => {
  return (
    <div>
      <img src={carrito} alt="" />
      <p>0</p>
    </div>
  )
}

export default CartWidget
