import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories'
import Contact from '../pages/Contact'

const ARoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/catalog/:slug' element={<Product />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/accessories' element={<Accessories />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    )
}

export default ARoutes
