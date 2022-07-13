import React, { useState } from "react";

const ItemCount = (props) => {
    const [cant, setCant] = useState(0)

    const handleAdd = () => {
        if ((cant + 1) <= props.stock)
            setCant(cant + 1)
    }

    const handleMinus = () => {
        if ((cant - 1) >= 0)
            setCant(cant - 1)
    }
    return (
        <div>
            <p>Current stock: {props.stock}</p>
            <button onClick={handleMinus}>-</button>
            <h3>{cant}</h3>
            <button onClick={handleAdd}>+</button>
        </div>
    );

}

export default ItemCount;