import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/sunshinelogo.png'
import Searchbar from './Searchbar'
import { setLoginModal } from '../redux/login-sign_modal/loginSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setSignModal } from '../redux/login-sign_modal/signSlice'
import { apiUrl } from '../utils/constant'
const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Quần áo",
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
    const [productData, setProductData] = useState([])
    const dispatch = useDispatch()
    const { pathName } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathName)
    const headerRef = useRef(null)
    const userRef = useRef(null)


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
    useEffect(() => {
        const fetchData = async () => {
            const rs = await axios.get(`${apiUrl}/product`)
            setProductData(rs.data)
        }
        fetchData()
    }, [])
    const setUserAction = () => {
        userRef.current.classList.toggle('active')
        console.log(userRef);
    }
    const menuLeft = useRef(null)
    const menuToggle = () => {
        menuLeft.current.classList.toggle('active')
    }
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
                            <Searchbar placeholder={"Tìm kiếm sản phẩm...."} data={productData} />
                        </div>
                        <div className="header-menu-item header-menu-right-item">
                            <Link to="/cart">
                                <i className='bx bx-shopping-bag' />
                            </Link>
                        </div>
                        <div className="header-menu-item header-menu-right-item" onClick={setUserAction} >
                            <i className='bx bx-user' />
                        </div>
                        <div className='user-collapse  ' ref={userRef} >
                            <div className='user-collapse-item justify-content-center' onClick={() => {
                                dispatch(setLoginModal())
                                setUserAction()
                            }}>
                                Đăng nhập
                            </div>
                            <div className='user-collapse-item justify-content-center'
                                onClick={() => {
                                    dispatch(setSignModal())
                                    setUserAction()
                                }}
                            >
                                Đăng ký
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header