import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const handleAdd = (qty) => {
        alert("Item agregado al carrito");
        setItemCount (qty);
        test.addToCart(item, qty);
    }

    return (
        <>
            <div className="product-container">
                <div className="card product-container">
                    <img src={item.img} className="card-img-top" alt="..."></img>
                    <div className="card-body card-container-detail">
                        <h3 className="card-title product-name">{item.name}</h3>
                        <h4 className="card-text product-brand">Marca: {item.brand}</h4>
                        <h4 className="card-text product-price">Precio: {item.price}</h4>

                        <div className="product-count">
                            {
                                itemCount === 0
                                    ? <ItemCount inicial={itemCount} stock={item.stock} onAdd={handleAdd} />
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