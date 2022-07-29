import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = (props) => {
    const [itemCount, setItemCount] = useState(0);

    const handleAdd = (qty) => {
        alert(qty + "Item agregado al carrito");
        setItemCount(qty);
    }

    return (
        <div className="card product-container">
            <div className="card-body card-container">
                <img src={props.img} className="img-container" alt="..."></img>
                <div className="card-title product-name">
                    <h3>{props.name}</h3>
                </div>
                <div style={{ cursor: "pointer" }} className="card-text card-container-link">
                    <Link to={"/item/${id}"}>Detalles</Link>
                </div>
                {
                    itemCount === 0
                        ? <ItemCount inicial={itemCount} stock={props.item.stock} onAdd={handleAdd} />
                        : <Link to='/Cart' style={{ textDecoration: "none" }}><Button variant="contained">CheckOut</Button></Link>
                }
            </div>
        </div>
    );
}

export default Item;