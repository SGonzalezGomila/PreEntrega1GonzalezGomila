import React from 'react'
import Item from './Item'
import "./item.css"
const ItemList = ({products}) => {
    return (
        <div className="item--List__container">
            {products.map((product) =>(
                <Item key={product.id} item={product}/>
            ))}
        </div>
    );
}

export default ItemList