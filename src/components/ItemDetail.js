import react from 'react';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = (props) => {
    const handleAdd = () => {
        console.log("Item agregado al carrito")
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
                            <ItemCount inicial={0} stock={props.item.stock} onAdd={handleAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;