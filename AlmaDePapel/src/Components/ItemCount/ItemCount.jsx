import React from 'react'

const ItemCount = ({stock,count,increment,decrement}) => {
  return (
    <div className='item--count--coontainer'>
      <div className="item--count--container">
        <button className="item--count--button" onClick={decrement}
        disabled={count <= 0}>-
        </button>
        <span className="item--count-button">{count}</span>
        <button className="item--count-button" onClick={increment}
        disabled={count >= stock}>
          +
        </button>
      </div>

    </div>
  )
}

export default ItemCount