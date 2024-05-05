import React from 'react'
import useCount from '../hooks/useCount'
import ItemCount from '../ItemCount/ItemCount';

const Item = (item) => {
    const { count, increment, decrement } = useCount(0);
    const onAdd = (nombreDelItem, cantidadaLlevar) => {
        console.log("nombreDeItem: ", nombreDelItem)
        console.log("cantidadaLlevar: ", cantidadaLlevar)
    };
    return (
        <div className="item__container">
            <div className="item__img__container">
                <img src={item.image} alt={item.title} className="item--img" />
            </div>
            <h2 className="item--title">{item.title}</h2>
            <p className='item--description'>{item.description}</p>
            <p className="item--price">${item.price}</p>
            <div className="item--counter__container">
                <ItemCount
                    stock={item.stock}
                    count={count}
                    increment={increment}
                    decrement={decrement}
                />
            </div>
            <div className="item--cart__contaiener">
                <button onClick={() => onAdd(item, count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Item
