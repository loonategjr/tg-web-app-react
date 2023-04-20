import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Item from "./components/Item/Item";
import BrandList from "./components/BrandList/BrandList";
function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<BrandList />}/>
                <Route path={'form'} element={<Form />}/>
                <Route path={'0'} element={<ProductList />}/>
                <Route path={'1'} element={<ProductList />}/>





            </Routes>
        </div>
    );
}

export default App;
