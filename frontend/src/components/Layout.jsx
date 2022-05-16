import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ARoutes from '../routes/ARoutes'

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
