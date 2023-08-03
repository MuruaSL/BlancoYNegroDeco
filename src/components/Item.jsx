import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const {id, name, image} = producto;

  return (
    <>
      <div className="itemresponsive cardstyles">
        <div>
          <h2 className="itemNameDiv">{name}</h2>
        </div>
        <img className="itemresponsive" src={image} alt="FOTULi ALT" />
          <Link to={`/item/${id}`}>
        <div className="seeMoreButtonDiv">
          <button className="seeMoreButton">Conocé más</button>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Item;



