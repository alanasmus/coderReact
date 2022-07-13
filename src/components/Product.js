import React from 'react';
import ItemCount from './ItemCount';

const Product = (props) => {
    return (
        <div className="product-container">
            <div className="product-name">
                <h3>{props.name}</h3>
            </div>
            <div className="product-brand">
                <h4>Marca: {props.brand}</h4>
            </div>
            <ItemCount stock={5}/>
        </div>
    );
}

export default Product;