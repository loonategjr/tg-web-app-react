import React, {useState} from 'react';
import './BrandList.css';
import Brand from "../Brand/Brand";
import {useTelegram} from "../../hooks/useTelegram";
const {brands} = useTelegram();

const BrandList = () => {
    function redirect(brand) {
        window.location.replace('https://deft-smakager-c905a3.netlify.app/' + brand.id.toString());
    }

    return (
        <div className={'list'}>
            {brands.map(item => (
                <Brand
                    brand={item}
                    onClick={redirect}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default BrandList;

