import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useShoppingCart } from '../context/ShoppingCartContext';

const LateralCart = () => {

const {cart, cartTotal , clearCart} = useShoppingCart()


return (
    <>
        <div className='cartContainer'>
            <div>
                <h1 className='cartTitle'>CARRITO DE COMPRAS</h1>
            </div>

            {cart.map((product) => (
                <CartItem key={product.id} product={product} />
            ))
            }
        
            <div className="div-buttonGroupCart">
                <p className='cartTotalCss'>Total: {cartTotal}</p>
                <a>
                <button onClick={clearCart} className="cartButton">Vaciar Carrito</button>
                </a>
                <Link to="/">
                <button className="cartButton">Continuar comprando</button>
                </Link>
                <Link to="/checkout">
                <button className="cartButton">Finalizar compra</button>
                </Link>
            </div>
        </div>       
    </>
    );
}

export default LateralCart