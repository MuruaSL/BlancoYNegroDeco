import React from 'react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const ItemDetail = ({ producto }) => {
  const { id } = useParams();
  const { name, description, precio, image } = producto;
  const { addItem } = useShoppingCart();

  const addToCart = quantity => {
      addItem(producto, quantity);
  };

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
        <ItemCount producto={producto} addToCart={addToCart} />
      </div>
    </>
  );
};

export default React.memo(ItemDetail);