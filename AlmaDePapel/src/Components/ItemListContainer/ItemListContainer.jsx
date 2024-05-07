import React, { useState, useEffect } from 'react'

import {getProducts} from "../../Mock/AsyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false))
  }, []);
  
  if(isLoading) return <h1>Cargando..</h1>


  return (
    <div>
      <h1 className='itemListContainer'>{titulo}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
