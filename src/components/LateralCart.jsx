import React from 'react'
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
const LateralCart = () => {
return (
    <>
        <aside className="AsideCss">
            {/* <Link to="/">
            <CloseIcon className='closeIcon'/>
            </Link> */}
            <div>
                <h1 className='sideCartTitle'>CARRITO DE COMPRAS</h1>

                <p className='sideCartText'>Tus productos favoritos te esperan!</p>
            </div>

            <div>
                <p>Nombre Articulo </p>
                <img src="" alt="" />
                <p>cantidad</p>
                <p>Precio</p>
                <p>-</p>
                <p>+</p>

            </div>
            <div className="div-buttonGrouplateralCart">
                <button className="lateralButton">Vaciar Carrito</button>
                <Link to="/">
                <button className="lateralButton">Continuar comprando</button>
                </Link>
                <Link to="/chekout">
                <button className="lateralButton">Finalizar compra</button>
                </Link>
            </div>
        </aside>

        
    </>
    );
}

export default LateralCart