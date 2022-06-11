import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import address from '../assets/fake-data/address.json'
import { getAllProduct } from '../redux/product/productSlice'
import OrderItem from '../components/OrderItem'
import numberWithCommas from '../utils/numberWithCommas'
import Button from "../components/Button"
const Order = () => {
    const user = useSelector(state => state.userState.user)
    const cartItems = useSelector((state) => state.cartItems.value)
    const productList = useSelector(state => state.productSlice.value)
    const initialForm = {
        email: user.email,
        phone: Number(user.phone),
        address1: "Thành phố Hồ Chí Minh",
        address2: "Quận Bình Tân",
        address3: "Phường Bình Trị Đông B"
    }
    const dispatch = useDispatch()
    const provinceRef = useRef(null)
    const districtRef = useRef(null)
    const wardRef = useRef(null)
    const [validated, setValidated] = useState(true)
    const [OrderForm, setOrderForm] = useState(initialForm)
    const { email, phone, address1, address2, address3 } = OrderForm
    const [Province, SetProvince] = useState(address)
    const [District, setDistrict] = useState([])
    const [Ward, setWard] = useState([])
    const [cartProducts, setcartProducts] = useState([])
    const [totalPrice, settotalPrice] = useState(0)
    const getCartItemsInfo = (cartItems) => {
        if (productList.length > 0) {
            let res = []
            if (cartItems.length > 0) {
                cartItems.forEach(e => {
                    let product = productList.filter(item => {
                        return item.slug === e.slug
                    })
                    res.push({
                        ...e,
                        product: product[0]
                    })
                })
            }
            return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
        }
    }
    const handleSubmit = () => {
        districtRef.current.classList.toggle('active')
    }
    const onOrderFormChange = e => {
        setOrderForm({
            ...OrderForm,
            [e.target.name]: e.target.value
        })
    }
    const onOrderFormChangeProvince = e => {
        setOrderForm({
            ...OrderForm,
            [e.target.name]: e.target.value,
            address2: "",
            address3: ""
        })

    }
    const onOrderFormChangeDistrict = e => {
        setOrderForm({
            ...OrderForm,
            [e.target.name]: e.target.value,
            address3: ""
        })

    }
    useEffect(() => {
        setDistrict(address.filter(item => item.Name === address1)[0].Districts)
    }, [address1, Province])
    useEffect(() => {
        let tmp = District.filter(item => item.Name === address2)[0]
        if (tmp)
            setWard(District.filter(item => item.Name === address2)[0].Wards)
    }, [address2, District])
    useEffect(() => {
        setcartProducts(getCartItemsInfo(cartItems))
        settotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems, productList])
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
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
                    <div className='order-leftcontent-main-content-info'>
                        <Form validated={validated} noValidate >
                            <fieldset className='border p-3'  >
                                <legend className='float-none w-auto p-3'>{user.customer_name}</legend>
                                <Form.Group className='me-5 mb-3' >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={onOrderFormChange}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Vui lòng nhập email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='me-5 mb-4' >
                                    <Form.Label>Số điện thoại </Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        name="phone"
                                        value={phone}
                                        onChange={onOrderFormChange}
                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Vui lòng số điện thoại.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </fieldset>

                        </Form>
                        <fieldset className='border p-3 mt-4'  >
                            <legend className='float-none w-auto p-3'>Thông tin giao hàng</legend>
                            <Form validated={validated} noValidate>
                                <Form.Group className=' mb-3' >
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"

                                        size="lg"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Vùi lòng nhập địa chỉ.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form>
                            <div className='order-leftcontent-main-content-info-select  '>
                                <div className='order-leftcontent-main-content-info-select-item'>
                                    <Form.Select size="lg"
                                        required
                                        value={address1}
                                        name="address1"
                                        onChange={onOrderFormChangeProvince}
                                    >
                                        <option >Tỉnh/Thành</option>
                                        {
                                            Province.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Name} >{item.Name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    <div>
                                        Vui lòng nhập tỉnh thành
                                    </div>
                                </div>
                                <div className='order-leftcontent-main-content-info-select-item'>
                                    <Form.Select size="lg"
                                        required
                                        value={address2}
                                        name="address2"
                                        onChange={onOrderFormChangeDistrict}
                                        ref={districtRef}
                                        bsPrefix="form-select form-select-lg active"
                                    >
                                        <option >Quận/Huyện</option>
                                        {
                                            District.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Name} >{item.Name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    <div>
                                        Vui lòng nhập tỉnh thành
                                    </div>
                                </div>
                                <div className='order-leftcontent-main-content-info-select-item '>
                                    <Form.Select size="lg"
                                        required
                                        value={address3}
                                        name="address3"
                                        onChange={onOrderFormChange}
                                    >
                                        <option >Phường/Xã</option>
                                        {
                                            Ward.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Name} >{item.Name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    <div>
                                        Vui lòng nhập tỉnh thành
                                    </div>
                                </div>

                            </div>
                        </fieldset>
                        <div className="text-end mt-4">
                            <Button onclick={handleSubmit}>Đặt hàng</Button>
                        </div>

                    </div>

                </div>
            </div>
            <div className='order-rightcontent'>
                <div className='order-rightcontent-content'>
                    <div className='order-rightcontent-content-order-cart-list'>
                        {
                            (cartProducts) ?
                                cartProducts.map((item, index) => {
                                    return <OrderItem item={item} key={index} />
                                })
                                : <></>
                        }
                    </div>
                    <div className='order-rightcontent-content-fee'>
                        <div className="order-rightcontent-content-fee-item">
                            <div className='order-rightcontent-content-fee-item-left' >
                                Tạm tính
                            </div>
                            <div className='order-rightcontent-content-fee-item-right'>
                                {numberWithCommas(Number(totalPrice))} đ
                            </div>
                        </div>
                        <div className="order-rightcontent-content-fee-item">
                            <div className='order-rightcontent-content-fee-item-left' >
                                Phí ship
                            </div >
                            <div className='order-rightcontent-content-fee-item-right' >
                                {totalPrice > 279000 ? "0" : numberWithCommas(Number(25000))} đ
                            </div>
                        </div>
                    </div>
                    <div className='order-rightcontent-content-fee'>
                        <div className="order-rightcontent-content-fee-item">
                            <div className='order-rightcontent-content-fee-item-left' >
                                Tổng
                            </div>
                            <div className='order-rightcontent-content-fee-item-right'>
                                {totalPrice > 279000 ? numberWithCommas(Number(totalPrice))
                                    : numberWithCommas(Number(totalPrice + 25000))} đ
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order