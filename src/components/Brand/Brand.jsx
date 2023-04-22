import React from 'react';
import Button from "../Button/Button";
import './Brand.css';

const Brand = ({brand, className, onClick}) => {

    const onClickHandler = () => {
        onClick(brand);
    }

    return (
        <div className={'brand ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{brand.title}</div>
            <div className={'description'}>{brand.description}</div>
            <Button className={'add-btn'} onClick={onClickHandler}>
                Открыть страницу бренда
            </Button>
        </div>
    );
};

export default Brand;
