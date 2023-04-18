import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
                
                <Route path={'1'} element={'Страница первого товара'}/>
                <Route path={'2'} element={<ProductItem
                    product={item}
                    onAdd={redirect}
                    className={'item'}
                />}/>
            </Routes>
        </div>
    );
}

export default App;
