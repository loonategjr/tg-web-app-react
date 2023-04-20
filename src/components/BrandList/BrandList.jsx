import React, {useState} from 'react';
import './BrandList.css';
import Brand from "../Brand/Brand";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
const {brands} = useTelegram();

/*
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

 */
const BrandList = () => {

    /*
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

 */

    //window.location.replace('https://deft-smakager-c905a3.netlify.app/');


    function redirect(brand) {
        window.location.replace('https://deft-smakager-c905a3.netlify.app/' + brand.id.toString());
    }

    return (
        <div className={'list'}>
            {brands.map(item => (
                <Brand
                    brand={item}
                    onAdd={redirect}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default BrandList;

