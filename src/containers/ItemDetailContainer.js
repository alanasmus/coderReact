import React, {useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { data } from '../utils/products';

let is_ok = true;

const getItem = (data) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(data[0])
            }, 2000);
        } else {
            reject("Error")
        }
    })
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    getItem(data).then(datos => {setItem(datos)}).catch(err => console.log(err));

    return (
        <>
            <ItemDetail item={item}></ItemDetail>
        </>
    );
}

export default ItemDetailContainer;