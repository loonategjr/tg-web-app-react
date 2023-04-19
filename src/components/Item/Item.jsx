import React from 'react';
import './Item.css';
import '../../hooks/useTelegram'
import {useTelegram} from "../../hooks/useTelegram";

const {products} = useTelegram();

/*
const Item = ({product, className}) => {
    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
        </div>
    );
};

 */

const Item = () => {
    const path = window.location.toString();
    const parts = path.split("/");
    const id = parts[parts.length - 1]

    return (
        <div>
            {products[id].description}
            <br/>
            Цена: {products[id].price}
            <br/>
            <img src="../Images/0.1.jpg" alt="Item photo"/>
            <br/>
            <img src="../Images/0.2.jpg" alt="Item photo"/>
        </div>
    );
};

export default Item;
