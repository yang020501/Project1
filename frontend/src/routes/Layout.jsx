import React, { useEffect } from 'react'
import ProductViewModal from '../components/ProductViewModal'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ARoutes from './ARoutes'
import LoginModal from '../components/LoginModal'
import RegisterModal from '../components/RegisterModal'
import AlertMessage from '../components/AlertMessage'
/* import { getAllSale } from '../redux/product/saleSlice'
import { useDispatch } from 'react-redux'
import { getAllProduct } from '../redux/product/productSlice'
import { getAllAccessories } from '../redux/product/accessoriesSlice'
import { getAllclothes } from '../redux/product/clothesSlice' */
const Layout = () => {
  /*   let dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllSale())
      dispatch(getAllProduct())
      dispatch(getAllAccessories())
      dispatch(getAllclothes())
    }, []) */
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
      <ProductViewModal />
      <LoginModal />
      <RegisterModal />
      <AlertMessage />
    </BrowserRouter>

  )
}

export default Layout
