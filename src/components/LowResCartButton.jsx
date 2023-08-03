import React from 'react'
import { Link } from 'react-router-dom';

const LowResCartButton = () => {
  return (
    <Link to ="/cart">
      <div className='lowRescartbuttondiv'>
        <button className="disp-none-cart">Carrito</button>
      </div>
    </Link>
    
  );
}

export default LowResCartButton