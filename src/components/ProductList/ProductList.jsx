import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
const {products} = useTelegram();
const ProductList = () => {

    tg.MainButton.hide();

    const path = window.location.toString();
    const parts = path.split("/");
    const brandid = parts[parts.length - 1];

    function redirect(product) {
        window.location.replace(window.location.toString() + "/" + product.id.toString());
    }

    return (
        <div className={'list'}>
            {products[brandid].map(item => (
                <ProductItem
                    product={item}
                    onAdd={redirect}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;

