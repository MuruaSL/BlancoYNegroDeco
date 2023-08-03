import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({productos}) => {
const { id } = useParams();
// Buscar el producto específico basado en el id proporcionado en la URL
const producto = productos.find((p) => p.id === id);
if (!producto) {
    return <p>El producto no ha sido encontrado</p>;
}

return (
    <div>
    <ItemDetail producto={producto} />
    </div>
);
};

export default ItemDetailContainer;
