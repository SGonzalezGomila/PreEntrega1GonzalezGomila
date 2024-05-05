import React from 'react'
import Item from '../ItemList/Item'


const ItemListContainer = ({ titulo }) => {
  
  return (
    <div>
      <h1 className='itemListContainer'>{titulo}</h1>
      <Item item={{
        id: 1,
        title: "Libreta Margaritas",
        price: 7600,
        desciption: 
        "Libreta de tulipanes, hoja rallada",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lematmarket.com%2Fcuadernos-y-libretas%2Flibretas-flores&psig=AOvVaw1wLYUsTd3MU_-CRAtZl3Lx&ust=1715037294887000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCNtPfR94UDFQAAAAAdAAAAABAE",
        stock: 2
    }}/>
    </div>
  )
}

export default ItemListContainer