import React, { useState } from "react";

const ItemCount = (props) => {
    const [cant, setCant] = useState(props.inicial)

    const handleAdd = () => {
        if ((cant + 1) <= props.stock)
            setCant(cant + 1)
    }

    const handleMinus = () => {
        if ((cant - 1) >= 0)
            setCant(cant - 1)
    }
    return (
        <div className="itemCount">
            <p>Current stock: {props.stock}</p>
            <button onClick={handleMinus}>-</button>
            <h3>{cant}</h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={props.onAdd}>Añadir al carrito</button>
        </div>
    );
}

export default ItemCount;