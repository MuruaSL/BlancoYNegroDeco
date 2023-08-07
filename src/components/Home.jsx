import React from 'react'

const Home = () => {
    return (
        <>
            <h1> Bienvenidos a mi pagina</h1>
            <div className='homeFirstDiv'>
                <p className='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore eligendi earum ratione optio dolorem repellendus illum aliquid corporis! Earum sed architecto quia dignissimos temporibus ex quas laudantium officia eaque!</p>
                <img className='homeImgCss' src="https://www.estilomayorista.com/wp-content/uploads/2021/07/EDREDON-CON-CORDERITO-2.5P-300x300.jpeg" alt="" />
            </div>
            <div className='homeSecondDiv'>
                <p className='homeText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quisquam nam molestias animi eos, rerum magnam dignissimos ab labore porro eveniet nihil natus dolorem ad facere voluptas id omnis laudantium.</p>
                <img  className='homeImgCss' src="https://d3ugyf2ht6aenh.cloudfront.net/stores/766/656/products/whatsapp-image-2023-03-20-at-10-10-111-e790729a58031c429716794054971404-480-0.jpeg" alt="" />
            </div>
        </>
    )
}

export default Home