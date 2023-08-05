import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
    //inicializacion del conteo y recir de datos
    const [count, setCount] = useState(initialValue);
    //Funciones de aumento y decremeto
    const increment = () => {
        setCount((prevCount) => prevCount + step);
    };

    const decrement = () => {
        // para evitar los numeros negativos, se indico que si el count es 0 o menor no se decremente mas ... caso contrario no hace nada
        if (count > 0) {
            setCount((prevCount) => prevCount - step);
        }  
    };

    //este componente lo hago devolver el conteo y las funciones para ser utilizadas fuera
    return { count, increment, decrement };
};

export default useCounter;
