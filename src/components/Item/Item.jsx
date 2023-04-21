import React, {useCallback, useEffect, useState} from 'react';
import './Item.css';
import '../../hooks/useTelegram'
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";

const {products} = useTelegram();


const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return item.price
    }, 0)
}





const Item = () => {
    const path = window.location.toString();
    const parts = path.split("/");
    const id = parts[parts.length - 1]
    const brandid = parts[parts.length - 2]







    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://85.119.146.179:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    
    
    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    
    
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        alert(newItems);
        alert(addedItems);
        
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Заказать ${getTotalPrice(newItems)}`
        })
    }



    const onAddHandler = () => {
        onAdd(products[brandid][id])
    }


    const hello = () => {
        alert("i'm pressed!");
    }

    return (
        <div>
            Описание {products[brandid][id].description} <br/>
            Цена: {products[brandid][id].price} <br/>
            <Button onClick={onAddHandler}>
                Добавить в корзину
            </Button> <br/>
            <img src="https://lh3.googleusercontent.com/bWBkDLsyvvVNK0n4jt2IuRx_6-urGmUECt_acUUM7jRfS3iuQObAOBP0hSQ4r76VLmbi3aW8JH60Y28RKaUd7dUXywxFOkE_tBvUgbTnpAoYMCN06z-33D_TYZCuWqzQM2UdBCFBxg=w2400" alt="Item photo"/>
            <img src="https://lh3.googleusercontent.com/hHnJT063STIqz9H65HIrOY8U6s82BWkQdvqLMTGOdm6j2mFJpwFGAP1gynWidcB10dFYw_DIqvWEw1Z5kPrwzw3feLt09g2jPRQtOxaigG9dMcRI6472vTDqhwEf7kHt6blI001sSg=w2400" alt="Item photo"/>
        </div>
    );
};

export default Item;
