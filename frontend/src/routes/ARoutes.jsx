import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const ARoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}

export default ARoutes
