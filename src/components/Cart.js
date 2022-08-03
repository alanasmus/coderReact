import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const test = useContext(CartContext);
    const [cartList, setCartList] = useState([]);
    console.log(test.cartList);
    return (
        <>
            <h2>Tu Carrito:</h2>
            <Link to='/' style={{ textDecoration: "none" }}><Button variant="contained">Continuar comprando</Button></Link>
            {
                (test.cartList.length > 0)
                    ? <Button variant="contained" onClick={test.clear}>Borrar todos los productos</Button>
                    : <h3>No compraste nada aun..</h3>
            }
            <div>
                {
                    test.cartList.length > 0 && test.cartList.map((item, index) => {
                        return (
                            <div key={index} className="product-container">
                                <div className="card product-container">
                                    <img src={item.img} className="card-img-top" alt="..."></img>
                                    <div className="card-body card-container-detail">
                                        <h3 className="card-title product-name">{item.name}</h3>
                                        <h4 className="card-text product-brand">Marca: {item.brand}</h4>
                                        <h4 className="card-text product-price">Precio por unidad: {item.price}</h4>
                                        <h4 className="card-text product-price">Cantidad: {item.qty}</h4>
                                        <Button variant="contained" onClick={() => test.removeItem(item.idItem)}>Quitar del carrito</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Cart;