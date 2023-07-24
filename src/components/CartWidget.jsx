import React from 'react';

const CartWidget = () => {
return (
  <>
    <button className="disp-flex-bag">
      <p className=".cart-num">{2}</p>
      <img
        className="bag-icon"
        src="../../src/assets/shopping-bag1.png"
        alt="CartButton"
      />
    </button>
  </>
);
}

export default CartWidget