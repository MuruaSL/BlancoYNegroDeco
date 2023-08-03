import React from 'react'
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
const LateralCart = () => {
return (
    <>
        <aside className="AsideCss">
            <Link to="/">
            <CloseIcon className='closeIcon'/>
            </Link>
            <div>
                <h1 className='sideCartTitle'>CARRITO DE COMPRAS</h1>

                <p className='sideCartText'>Tus productos favoritos te esperan!</p>
            </div>

            <div className="div-buttonGrouplateralCart">
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