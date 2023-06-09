import React, {useCallback, useEffect, useState} from 'react';
import './Item.css';
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Item = () => {
    
    const {tg, products} = useTelegram();
    const path = window.location.toString();
    const parts = path.split("/");
    const id = parts[parts.length - 1]
    const brandid = parts[parts.length - 2]
    let newItem = products[brandid][id];
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const onSendData = useCallback(() => {
        const data = {
            title,
            description,
            price
        }
        tg.sendData(JSON.stringify(data));
    }, [description, price])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = () => {

        setTitle(products[brandid][id].title);
        setDescription(products[brandid][id].description);
        setPrice(products[brandid][id].price);
        
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Заполнить данные и \nзаказать на сумму ${newItem.price}`
        })
    }

    return (
        <div>
            Описание {products[brandid][id].description} <br/>
            Цена: {products[brandid][id].price} <br/>
            <Button onClick={onAdd}>
                Купить
            </Button> <br/>
            <img src="https://lh3.googleusercontent.com/bWBkDLsyvvVNK0n4jt2IuRx_6-urGmUECt_acUUM7jRfS3iuQObAOBP0hSQ4r76VLmbi3aW8JH60Y28RKaUd7dUXywxFOkE_tBvUgbTnpAoYMCN06z-33D_TYZCuWqzQM2UdBCFBxg=w2400" alt="Item photo"/>
            <img src="https://lh3.googleusercontent.com/hHnJT063STIqz9H65HIrOY8U6s82BWkQdvqLMTGOdm6j2mFJpwFGAP1gynWidcB10dFYw_DIqvWEw1Z5kPrwzw3feLt09g2jPRQtOxaigG9dMcRI6472vTDqhwEf7kHt6blI001sSg=w2400" alt="Item photo"/>
        </div>
    );
};

export default Item;
