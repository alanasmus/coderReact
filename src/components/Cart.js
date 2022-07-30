import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);
    console.log(test.cartList);
    return (
        <>
            <h3>Soy el Carrito</h3>
        </>
    )
}

export default Cart;