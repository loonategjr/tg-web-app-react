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
                <Route path={'0'} element={<Item />}/>
                <Route path={'1'} element={<Item />}/>
                <Route path={'2'} element={<Item />}/>
                <Route path={'3'} element={<Item />}/>
                <Route path={'4'} element={<Item />}/>
                <Route path={'5'} element={<Item />}/>
                <Route path={'6'} element={<Item />}/>
                <Route path={'7'} element={<Item />}/>

            </Routes>
        </div>
    );
}

export default App;
