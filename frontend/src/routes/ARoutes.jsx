import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories'
import Contact from '../pages/Contact'
import Order from '../pages/Order'
import CustomerInfo from '../pages/CustomerInfo'
import Policy from '../pages/Policy'
import NoPage from '../pages/NoPage'

const ARoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/catalog/:slug' element={<Product />}></Route>
            <Route path='/policy/:policy' element={<Policy />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/accessories' element={<Accessories />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/order' element={<Order />}></Route>
            <Route path='/customer' element={<CustomerInfo />}></Route>
            <Route path='*' element={<NoPage />}></Route>
        </Routes>
    )
}

export default ARoutes
