import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CartWidget from './Components/CartWidget/CartWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="hola"/>
    </>
  )
}

export default App
