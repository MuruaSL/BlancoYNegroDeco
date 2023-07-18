import React from 'react'
import { CloseIcon } from "@chakra-ui/icons";
const LateralCart = () => {
return (
    <>
        <aside className="AsideCss">
            <CloseIcon className='closeIcon'/>
            <div>
                <h1 className='sideCartTitle'>CARRITO DE COMPRAS</h1>

                <p className='sideCartText'>Tus productos favoritos te esperan!</p>
            </div>

            <div className="div-buttonGrouplateralCart">
                <button className="lateralButton">Continuar comprando</button>
                <button className="lateralButton">Finalizar compra</button>
            </div>
        </aside>
    </>
    );
}

export default LateralCart