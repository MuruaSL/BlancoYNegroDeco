import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const CartWidget = () => {
  const { cartLengthForCartWidget } = useShoppingCart();

  return (
    <>
      <button className="disp-flex-bag">
        <p className="cart-num">{cartLengthForCartWidget}</p>
        <img className="bag-icon" src="../../src/assets/shopping-bag1.png" alt="CartButton" />
      </button>
    </>
  );
};

export default CartWidget;
