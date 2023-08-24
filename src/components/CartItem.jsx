import React from 'react'
import {DeleteIcon ,MinusIcon} from '@chakra-ui/icons';

const CartItem = ({product}) => {
console.log(product)
return (
    <div className='CartItemContainer'>
        <div className='CartItemCard'> 
            <div className='CartItemdiv5'>
                <p>{product.name}</p>
            </div>
            <div className='CartItemdiv1'>
                <button><DeleteIcon/></button>
            </div>
            <div className='CartItemdiv6'>
                <img className='cartItemImg' src={product.image} alt="" />
            </div>
            <div className='CartItemdiv2'>
                <p>Subtotal: {product.precio * product.quantity} </p>
            </div>
            <div className='CartItemdiv3'>
                <p>Cantidad: { product.quantity }</p>
            </div>
            <div className='CartItemdiv4'>
                <button> <MinusIcon/> </button>
            </div>
        </div>
    </div>   
    )
}

export default CartItem