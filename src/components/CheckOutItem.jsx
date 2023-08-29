import React from 'react'

const CheckOutItem = ({product}) => {
return (
    <div className='checkoutItemContainer'>
                <img className='checkoutItemImg' src={product.image} alt={(product.name)+" imagen "} />
                <p>{product.name}</p>
                <p>Cantidad: { product.quantity }</p>
                <p>Subtotal: {product.precio * product.quantity} </p>
    </div>   
    )
}

export default CheckOutItem