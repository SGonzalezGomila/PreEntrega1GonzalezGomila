import React, { useState, useEffect } from 'react'

import {getProducts} from "../../Mock/AsyncMock"
import ItemList from "../ItemList/ItemList"
import useProducts from '../hooks/useProducts'


const ItemListContainer = ({ titulo }) => {
  const {isLoading, products} = useProducts()
  if(isLoading) return <h1>Cargando..</h1>
  return (
    <div>
      <h1 className='itemListContainer'>{titulo}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
