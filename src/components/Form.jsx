import React from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CheckOutItem from './CheckOutItem'
const Form = () => {

  const {clearCart,cart}= useShoppingCart()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState("");
  const { cartTotal } = useShoppingCart();
  const [orderId, setOrderId] = useState("Aun no completo su pedido")
  const db = getFirestore()
  const handleSubmit = (e)=> {
    e.preventDefault()
    addDoc(orderCollection, order).then(({id})=>
    setOrderId(id));
    clearCart();
    Swal.fire(
      'Recibimos tu pedido!',
      'A la brevedad te contactaremos',
      'success'
    )
  }
  
  const order = {
    name,
    phone,
    email,
    message,
    cart,
    cartTotal,
    orderId
  }

  const orderCollection = collection(db,"order")

  return (
    <>
      
      <div className='formContainer'>
        <form onSubmit={handleSubmit} className="form">
          <h2 className='formTitle'>CONTACTENOS</h2>
          <p type="Name:"><input required  className='formInputs' placeholder="Nombre y Apellido" onChange={(e)=>setName(e.target.value)} /></p>
          <p type="Name:"><input required className='formInputs' placeholder="Telefono celular" onChange={(e)=>setPhone(e.target.value)} /></p>
          <p type="Email:"><input required className='formInputs' placeholder="Email de contacto" onChange={(e)=>setEmail(e.target.value)}/></p>
          <p type="Message:"><textarea required className='formInputs' placeholder="Mensaje" onChange={(e)=>setMessage(e.target.value)} /></p>
          <p>Su identificador de pedido:</p>
          <p className='OrderIdP'> {orderId} </p>
          <button  className='formSubmitButton' type='submit'>Enviar Pedido</button>
          <div className='FormspanContainer'>
            <span className="formSpan">Consultas: +54 9 351 509 0016</span>
          </div>
        </form> 
        <div>
                {cart.map((product) => (
                    <CheckOutItem key={product.id} product={product} />
                  ))
                }
                <p className='checkoutTotal'>Total: {cartTotal}</p>
        </div>
      </div>
    </>
  )
}


export default Form