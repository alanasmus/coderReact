import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory === undefined) {
            cargarData(data)
                .then(datos => { setDataCargada(datos) })
                .catch(err => { console.log(err) });
        } else {
            cargarData(data.filter(item => item.categoryId === parseInt(idCategory)))
                .then(datos => { setDataCargada(datos) })
                .catch(err => { console.log(err) });
        }
    }, [idCategory]);

    return (
        <>{
            dataCargada.map((item, index) => {
                return (
                    <>
                        <Item key={index} name={item.name} brand={item.brand} stock={item.stock} img={item.img} />

                    </>
                )
            })
        }
        </>
    )
}

export default ItemList;