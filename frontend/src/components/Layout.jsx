import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ARoutes from '../routes/ARoutes'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <React.Fragment>
          <div className="main">
            <ARoutes />
          </div>
        </React.Fragment>
        <Footer />
      </div>


    </BrowserRouter>

  )
}

export default Layout
