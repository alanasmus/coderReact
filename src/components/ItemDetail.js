import react from 'react';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
    const handleAdd = () => {
        console.log("Item agregado al carrito")
    }

    return (
        <><div className="product-container">
            <div className="product-name">
                <h3>{props.item.name}</h3>
            </div>
            <div className="product-brand">
                <h4>Marca: {props.item.brand}</h4>
            </div>
            <div className="product-price">
                <h4>Precio: {props.item.price}</h4>
            </div>
            <div className="product-img">
                <img src={props.item.img}></img>
            </div>
            <div className="product-count">
                <ItemCount inicial={0} stock={props.item.stock} onAdd={handleAdd} />
            </div>
        </div>
        </>
    );
}

export default ItemDetail;