import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/sunshinelogo.png'
import Searchbar from './Searchbar'
import productData from '../assets/fake-data/products'
import { set } from '../redux/login-sign_modal/loginSlice'
import { useDispatch } from 'react-redux'
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
    const dispatch = useDispatch()
    const { pathName } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathName)
    const headerRef = useRef(null)
    //scroll bar effecr header
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            }
            else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    headerRef.current.classList.add('shrink')
                }
                else {
                    headerRef.current.classList.remove('shrink')
                }
            })
        };

    }, [])
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')
    return (
        <div className="header " ref={headerRef}>
            <div className="container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="header-menu">
                    <div className="header-menu-mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left' />
                    </div>
                    <div className="header-menu-left" ref={menuLeft}>
                        <div className="header-menu-left-close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left' />
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index}
                                    className={`header-menu-item header-menu-left-item ${(index === activeNav) ? 'active' : ' '}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>

                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header-menu-right">
                        <div className="header-menu-item header-menu-right-item">
                            <Searchbar placeholder={"Tìm kiếm sản phẩm...."} data={productData.getAllProducts()} />
                        </div>
                        <div className="header-menu-item header-menu-right-item">
                            <Link to="/cart">
                                <i className='bx bx-shopping-bag' />
                            </Link>
                        </div>
                        <div className="header-menu-item header-menu-right-item" onClick={() => dispatch(set())}>
                            <i className='bx bx-user' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header