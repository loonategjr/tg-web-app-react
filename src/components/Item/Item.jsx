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
    const brandid = parts[parts.length - 2]

    // тут надо поменять products на двумерный массив и поменять индексы

    return (
        <div>
            {products[brandid][id].description}
            <br/>
            Цена: {products[brandid][id].price}
            <br/>
            <img src="https://lh3.googleusercontent.com/bWBkDLsyvvVNK0n4jt2IuRx_6-urGmUECt_acUUM7jRfS3iuQObAOBP0hSQ4r76VLmbi3aW8JH60Y28RKaUd7dUXywxFOkE_tBvUgbTnpAoYMCN06z-33D_TYZCuWqzQM2UdBCFBxg=w2400" alt="Item photo"/>
            <br/>
            <img src="https://lh3.googleusercontent.com/hHnJT063STIqz9H65HIrOY8U6s82BWkQdvqLMTGOdm6j2mFJpwFGAP1gynWidcB10dFYw_DIqvWEw1Z5kPrwzw3feLt09g2jPRQtOxaigG9dMcRI6472vTDqhwEf7kHt6blI001sSg=w2400" alt="Item photo"/>
        </div>
    );
};

export default Item;
