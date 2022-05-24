import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ARoutes from './ARoutes'

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
      </div>
      <Footer />
    </BrowserRouter>

  )
}

export default Layout
