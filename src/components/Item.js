import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = (props) => {
    return (

        <div className="card product-container">
            <div className="card-body card-container">
                <img src={props.img} className="img-container" alt="..."></img>
                <div className="card-title product-name">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-title product-price">
                    <h3>{props.price}</h3>
                </div>
                <div style={{ cursor: "pointer" }} className="card-text card-container-link">
                    <Link to={`/item/${props.id}`}><Button variant="contained">Detalles</Button></Link>
                </div>
            </div>
        </div>

    );
}

export default Item;