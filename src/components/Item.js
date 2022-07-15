import React from 'react';
import ItemCount from './ItemCount';

const Item = (props) => {
    const handleAdd = () => {
        console.log("Item agregado al carrito")
    }

    return (
        <div className="product-container">
            <div className="product-name">
                <h3>{props.name}</h3>
            </div>
            <div className="product-brand">
                <h4>Marca: {props.brand}</h4>
            </div>
            <ItemCount inicial={0} stock={props.stock} onAdd={handleAdd}/>
        </div>
    );
}

export default Item;