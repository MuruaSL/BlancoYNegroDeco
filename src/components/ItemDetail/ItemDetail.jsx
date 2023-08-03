import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';

const ItemDetail = ({producto}) => {
    const {id} = useParams();
    const { name, description, precio, image} = producto;
    
return (
  
  <>
    <div className="itemDetailresponsive cardstyles ">
      <div>
        <h2 className="itemDetailNameDiv">{name}</h2>
      </div>
      <img className="itemDetailresponsive" src={image} alt="FOTULi ALT" />
      <div className="descript_priceDiv">
          <p className="itemDetailDescriptDiv">{description}</p>
          <p>Precio: ${precio}</p>
        </div>
        <div className="moreOrLessItemsDiv">
          <button className="addorremovequantity">-</button>
          <ItemCount/>
          <button className="addorremovequantity">+</button>
        </div>
        <div>
          <button className="addtocardbutton">Agregar al carrito</button>
        </div>
    </div>
  </>
);
}

export default ItemDetail