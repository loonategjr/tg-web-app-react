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
    alert(window.location.toString());
    return (
        <div>
            hello
        </div>
    );
};

export default Item;
