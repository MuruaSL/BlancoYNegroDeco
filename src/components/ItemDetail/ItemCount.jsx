import React from 'react';
import useCounter from '../reusable/useCounter';

const ItemCount = ({ addToCart }) => {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <>
      <div className="moreOrLessItemsDiv">
        <button onClick={decrement} className="addorremovequantity">-</button>
        Cantidad: {count}
        <button onClick={increment} className="addorremovequantity">+</button>
      </div>
      <div className="AddTocartbuttonDiv">
        <button className="addtocardbutton" onClick={() => addToCart(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
