import React from 'react'

import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/sunshinelogo.png'

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about"
  },
  {
    display: "Liên hệ",
    path: "/about"
  },
  {
    display: "Tuyển dụng ",
    path: "/about"
  },
  {
    display: "Tin tức",
    path: "/about"
  },
  {
    display: "Hệ thống",
    path: "/about"
  }

]

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about"
  },
  {
    display: "Chính sách bảo hành",
    path: "/about"
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about"
  }
]


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid col={4}
          mdCol={2}
          smCol={1}
          gap={10} >
          <div>
            <div className='footer-title'>
              Tổng đài hổ trợ
            </div>

            <div className="footer-content">
              <p>
                Liên hệ đặt hàng <strong>0366330205</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0366330205</strong>
              </p>
              <p>
                Góp ý phát triển  <strong>0366330205</strong>
              </p>
            </div>

          </div>
          <div>
            <div className='footer-title'>
              Về sunshine
            </div>
            <div className="footer-content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div>
            <div className='footer-title'>
              Chăm sóc khách hàng
            </div>
            <div className="footer-content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div className='footer-about'>
            <p>
              <Link to="/">
                <img src={logo} className="footer-logo" alt='sunshinelogo.png'/>
              </Link>
            </p>
            <p>
                Hướng đến mục tiêu mang lại niềm vui ăn mặc với mỗi ngày cho hàng triệu
                người tiêu dùng Việt. Hãy cùng sunshine hướng đến một cuộc sống năng động,
                tích cực hơn. Vì mỗi ngày là một cuộc vui.   
            </p>
          </div>
        </Grid>
      </div>
    </footer >
  )
}

export default Footer