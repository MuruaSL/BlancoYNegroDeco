import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useShoppingCart } from '../context/ShoppingCartContext';

const LateralCart = () => {

const {cart, cartTotal , clearCart, cartLength} = useShoppingCart()

if (cartLength){
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
else{
    return(
        <>
            <div className='cartContainer'>
                <div>
                    <h1 className='cartTitle'>CARRITO DE COMPRAS</h1>
                </div>

                <div className='noProductsDiv'>
                    <img className='crossSignal' src="./src/assets/emptyShoppingBag.png" alt="crossSignal" />
                    <h1 className='cartNoProductsText'>Ups! Parece que aun no hay nada en tu carrito</h1>
                    <h2 className='cartNoProductsSubText'>Seguro que hay algo para ti esperando!</h2>
                </div>
                <div className="div-buttonGroupCart backToShopWEmptyCartDiv">
                    <Link to="/">
                    <button className="cartButton backToShopWEmptyCart">Volver a la tienda</button>
                    </Link>
                </div>
            </div>       
        </>
        );
}
}

export default LateralCart