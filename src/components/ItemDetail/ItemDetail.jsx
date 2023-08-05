import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';

const ItemDetail = ({producto}) => {
    const {id} = useParams();
    const { name, description, precio, image} = producto;
    
return (
  <>
    <div className="detail_cardstyle">
      <div>
        <h2 className="itemDetailNameDiv">{name}</h2>
      </div>
      <div className="itemDetailImg">
        <img className="imgdetail_css" src={image} alt="FOTULi ALT" />
      </div>
      <div className="descript_priceDiv">
        <p className="itemDetailDescriptDiv">{description}</p>
        <p>Precio: ${precio}</p>
      </div>
      <ItemCount />
      <div className="AddTocartbuttonDiv">
        <button className="addtocardbutton">Agregar al carrito</button>
      </div>
    </div>
  </>
);
}

export default ItemDetail