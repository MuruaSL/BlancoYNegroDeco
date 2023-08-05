import React from 'react'
import useCounter from '../reusable/useCounter'


const ItemCount = () => {

  const {count, increment, decrement}= useCounter(0,1)



  
  return (
    <>
      <div className="moreOrLessItemsDiv">
        <button onClick={decrement} className="addorremovequantity">-</button>
        Cantidad: {count}
        <button  onClick={increment} className="addorremovequantity">+</button>
      </div>
    </>
  );
}

export default ItemCount