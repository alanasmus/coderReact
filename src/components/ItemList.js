import React, {useState} from 'react';
import { data } from '../utils/products';
import Item from './Item';

let is_ok = true;

const cargarData = (data) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        } else {
            reject("Error")
        }
    })
}

const ItemList = () => {

    const [dataCargada, setDataCargada] = useState([])
    cargarData(data).then(datos => { setDataCargada(datos)}).catch(err => { console.log(err) });

    return (
        <>
            {
                dataCargada.map((item, index) => {
                    return (
                        <Item key={index} name={item.name} brand={item.brand} stock={item.stock} />
                    )
                })
            }
        </>
    )
}

export default ItemList;