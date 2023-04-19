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
            <img src="https://disk.yandex.ru/i/7L7a0T7gZK9LRg" alt="Item photo"/>
            <br/>
            <img src="https://2.downloader.disk.yandex.ru/preview/3b06236ddf25f65209befe5b698f11e60efec98e74ae532c77788970029fe1cf/inf/S3xxH6e4jDL4D6l3nSchZAgNDlNgZwhGg6Ns1edFQ4SRkh-IarjiCS-O6k2xRWHEjfj3xSd5Jst5ZweoK2JQDA%3D%3D?uid=561268315&filename=0.1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=561268315&tknv=v2&size=2850x1642" alt="Item photo"/>
        </div>
    );
};

export default Item;
