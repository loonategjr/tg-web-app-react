import React from 'react';
import './Item.css';
import '../../hooks/useTelegram'
import {useTelegram} from "../../hooks/useTelegram";

const {products} = useTelegram();

/*
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

 */


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


const Item = () => {
    const path = window.location.toString();
    const parts = path.split("/");
    const id = parts[parts.length - 1]
    const brandid = parts[parts.length - 2]

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
