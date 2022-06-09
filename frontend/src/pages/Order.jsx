import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <div className='order'>
            <div className='order-leftcontent'>
                <div className="order-leftcontent-main-header">
                    <Link to={"/"} >
                        <h1 >Sunshie CLOTHES</h1>
                    </Link>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/cart">Giỏ hàng</Link>
                        </li>
                        <li className="breadcrumb-item breadcrumb-item-current">
                            Thông tin vận chuyển/Shipping Information
                        </li>
                    </ul>
                </div>
                <div className="order-leftcontent-main-content">

                </div>
            </div>
            <div className='order-rightcontent'>
                heelo
            </div>
        </div>
    )
}

export default Order