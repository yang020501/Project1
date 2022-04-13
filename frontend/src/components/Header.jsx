import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {
    const { pathName } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathName)
    return (
        <div className="header">
            <div className="container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="header-menu">
                    <div className="header-menu-mobile-toggle">
                        <i className='bx bx-menu-alt-left' />
                    </div>
                    <div className="header-menu-left">
                        <div className="header-menu-left-close">
                            <i className='bx bx-chevron-left' />
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className={`header-menu-item header-menu-left-item ${(index === activeNav) ? 'active' : ' '}`}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header-menu-right">
                        <div className="header-menu-item header-menu-right-item">
                            <i className='bx bx-search' />
                        </div>
                        <div className="header-menu-item header-menu-right-item">
                            <Link to="/cart">
                                <i className='bx bx-shopping-bag' />
                            </Link>
                        </div>
                        <div className="header-menu-item header-menu-right-item">
                            <i className='bx bx-user' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header