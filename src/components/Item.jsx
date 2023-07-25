import React from "react";


const Item = ({ producto }) => {
  const { name, description, precio,stock, image} = producto;

  return (
    <>
      <div className="itemresponsive cardstyles">
        <div>
          <h2 className="itemNameDiv">{name}</h2>
        </div>
        <img
          className="itemresponsive"
          src={image}
          alt="FOTULi ALT"
        />
        <div className="descript_priceDiv">
          <p className="itemDescriptDiv">{description}</p>
          <p>Precio: ${precio}</p>
        </div>
        <div className="moreOrLessItemsDiv">
          <button className="addorremovequantity">-</button>
          <div>{1}</div>
          <button className="addorremovequantity">+</button>
        </div>
        <div>
          <button className="addtocardbutton">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default Item;



