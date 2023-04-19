import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Item from "./components/Item/Item";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>

                <Route path={'1'} element={<Item />}/>
                <Route path={'2'} element={'надо создать отдельный jsx файлик с импортом products из hooks и выводить описание, считывая конец url как id товара'}/>

            </Routes>
        </div>
    );
}

export default App;
