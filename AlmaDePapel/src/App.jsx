import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CartWidget from './Components/CartWidget/CartWidget'
import ItemCount from './Components/ItemCount/ItemCount'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="ES ALMA DE PAPEL"/>
      
    </>
  )
}

export default App
