import Item from "./Item";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "./reusable/Loader";

const ItemListContainer = ({ productos }) => {
    const { category } = useParams();

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            
            setLoading(false)
        },1200)
    },[])
    if (loading) {
        return (<Loader/>)
    }

    if (productos.length === 0) {
        return <p>Ha ocurrido un error inesperado</p>;
    }

    // Convertir el parámetro category en un número 
    const categoryNumber = category ? parseInt(category) : null;

    // filtrado los productos según la categoría proporcionada en la URL (si existe) 
    // y devuelve un nuevo arreglo con los productos que pertenecen a esa categoría específica. 
    // Si no se proporcionó ninguna categoría válida, simplemente devuelve todos los productos sin aplicar ningún filtrado.
    const filtered_array = categoryNumber
        ? productos.filter((producto) => producto.category === categoryNumber)
        : productos;

    if (filtered_array.length === 0) {
        return (
            <div className="NoProductsMessageDiv">  
                <div className="NoProductsMessage">
                    <p>UPS!</p>
                    <p>Lamentablemente no disponemos de productos que coincidan con tu busqueda... </p>
                    <div className="imgNoProductsMessageDiv">
                    <img className="imgNoProductsMessage" src="../src/assets/fotoCamaBlanqueria.png" alt="camaModeloBlanqueria.jpg" />
                    </div>
                    <p>Pero pronto traeremos mas!</p>
                </div>
            </div>
        )
    }
    return (
        <div className="grid-Items">{
            filtered_array.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))
            }
        </div>
    );
};



export default React.memo(ItemListContainer);
