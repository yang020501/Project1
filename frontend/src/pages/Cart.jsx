import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value)
  const [cartProducts, setcartProducts] = useState([])
  const [totalProducts, settotalProducts] = useState(0)
  const [totalPrice, settotalPrice] = useState(0)

  useEffect(() => {
    setcartProducts(productData.getCartItemsInfo(cartItems))
    settotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    settotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
  }, [cartItems])

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart-info">
          <div className="cart-info-txt">
            <p>
              Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
            </p>
            <div className="cart-info-txt-price">
              <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart-info-btn">
            <Button size="block">
              Đặt hàng
            </Button>
            <Link to="/catalog">
              <Button size="block">
                Tiếp tục mua hàng
              </Button>
            </Link>

          </div>
        </div>
        <div className="cart-list">
          {
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          }
        </div>
      </div>
    </Helmet>
  )
}

export default Cart
