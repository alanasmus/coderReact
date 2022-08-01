import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let cartListAux = [...cartList];
        let exist = false;
        cartListAux.forEach(product => {
            if (product.idItem === item.id){
                product.qty += qty;
                exist = true;
            } 
        })
        if (exist == false) {
            let newCart = {
                idItem : item.id,
                name : item.name,
                brand : item.brand,
                price : item.price,
                img : item.img,
                qty : qty
            }
            cartListAux.push (newCart);
        }
        setCartList(cartListAux);
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;