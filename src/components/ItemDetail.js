import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = (props) => {
    const [itemCount, setItemCount] = useState(0);

    const handleAdd = (qty) => {
        alert(qty + "Item agregado al carrito");
        setItemCount (qty);
    }

    return (
        <>
            <div className="product-container">
                <div className="card product-container">
                    <img src={props.item.img} className="card-img-top" alt="..."></img>
                    <div className="card-body card-container-detail">
                        <h3 className="card-title product-name">{props.item.name}</h3>
                        <h4 className="card-text product-brand">Marca: {props.item.brand}</h4>
                        <h4 className="card-text product-price">Marca: {props.item.price}</h4>

                        <div className="product-count">
                            {
                                itemCount === 0
                                    ? <ItemCount inicial={itemCount} stock={props.item.stock} onAdd={handleAdd} />
                                    : <Link to='/Cart' style={{ textDecoration: "none" }}><Button variant="contained">CheckOut</Button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;