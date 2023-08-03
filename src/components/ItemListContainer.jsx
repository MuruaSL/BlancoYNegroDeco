import React from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({productos}) => {

const {category} = useParams()

if (productos.length === 0) {
    return <p>Ha ocurrido un error inesperado</p>;
}

return (
    <div className="grid-Items">
    {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
    ))}
    </div>
);
};

export default ItemListContainer;
