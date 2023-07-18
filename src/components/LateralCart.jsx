import React from 'react'

const LateralCart = () => {
return (
    <>
        <aside className="AsideCss">
            <div>
                <h1 className='sideCartTitle'>CARRITO DE COMPRAS</h1>

                <p className='sideCartText'>Aquí estan esperandote tus productos favoritos!</p>
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