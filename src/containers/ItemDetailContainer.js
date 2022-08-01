import React, {useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { data } from '../utils/products';
import { useParams } from 'react-router-dom';

let is_ok = true;

const getItem = (data, index) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(data[index])
            }, 2000);
        } else {
            reject("Error")
        }
    })
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { idItem } = useParams();

    getItem(data, idItem).then(datos => {setItem(datos)}).catch(err => console.log(err));

    return (
        <>
            <ItemDetail item={item}></ItemDetail>
        </>
    );
}

export default ItemDetailContainer;