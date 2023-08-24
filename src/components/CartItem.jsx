import React from 'react'
import {DeleteIcon ,MinusIcon,AddIcon} from '@chakra-ui/icons';
import { useShoppingCart } from '../context/ShoppingCartContext';

const CartItem = ({product}) => {
const {removeItem, decrementQuantity,incrementQuantity}= useShoppingCart()
return (
    <div className='CartItemContainer'>
        <div className='CartItemCard'> 
            <div className='CartItemdiv5'>
                <p>{product.name}</p>
            </div>
            <div className='CartItemdiv1'>
                <button onClick={()=>removeItem(product.id)}><DeleteIcon/></button>
            </div>
            <div className='CartItemdiv6'>
                <img className='cartItemImg' src={product.image} alt={(product.name)+" imagen "} />
            </div>
            <div className='CartItemdiv2'>
                <p>Subtotal: {product.precio * product.quantity} </p>
            </div>
            <div className='CartItemdiv3'>
                <p>Cantidad: { product.quantity }</p>
            </div>
            <div className='CartItemdiv4'>
                <button className='decrementIncrementCartButton' onClick={()=>decrementQuantity(product.id)}> <MinusIcon/> </button>
                <button onClick={()=>incrementQuantity(product.id)}> <AddIcon/> </button>
            </div>
        </div>
    </div>   
    )
}

export default CartItem