import React from 'react'
import { Link } from 'react-router-dom';
import {DeleteIcon ,MinusIcon} from '@chakra-ui/icons';
const LateralCart = () => {
return (
    <>
        <div className='cartContainer'>
            <div>
                <h1 className='cartTitle'>CARRITO DE COMPRAS</h1>
            </div>

        <div className='CartItemContainer'>
            <div className='CartItemCard'> 
                <div className='CartItemdiv5'>
                    <p>PANTUFLAS PELUDAS</p>
                </div>
                <div className='CartItemdiv1'>
                    <button><DeleteIcon/></button>
                </div>
                <div className='CartItemdiv6'>
                    <img className='cartItemImg' src="/src/assets/articulos/1.png" alt="" />
                </div>
                <div className='CartItemdiv2'>
                    <p>Subtotal: {9999} </p>
                </div>
                <div className='CartItemdiv3'>
                    <p>Cantidad: { 1 }</p>
                </div>
                <div className='CartItemdiv4'>
                    <button> <MinusIcon/> </button>
                </div>
            </div>
        </div>    
            



            <div className="div-buttonGroupCart">
                <a >
                <button className="cartButton">Vaciar Carrito</button>
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