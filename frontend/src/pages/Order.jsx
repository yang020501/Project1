import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import address from '../assets/fake-data/address.json'
import { getAllProduct } from '../redux/product/productSlice'
import OrderItem from '../components/OrderItem'
import { setAlert } from '../redux/alert-message/alertMessage'
import numberWithCommas from '../utils/numberWithCommas'
import Button from "../components/Button"
import axios from 'axios'
import { apiUrl } from '../utils/constant'
const Order = () => {
    const user = useSelector(state => state.userState.user)
    const cartItems = useSelector((state) => state.cartItems.value)
    const productList = useSelector(state => state.productSlice.value)
    const initialForm = {
        email: user.username,
        phone: Number(user.phone),
        house_address: user.house_address,
        address1: user.address1,
        address2: user.address2,
        address3: user.address3
    }
    const dispatch = useDispatch()
    const infoRef = useRef(null)
    const addressRef = useRef(null)
    const provinceRef = useRef(null)
    const districtRef = useRef(null)
    const wardRef = useRef(null)
    const provinceInvalidRef = useRef(null)
    const districtInvalidRef = useRef(null)
    const wardInvalidRef = useRef(null)
    const [validated, setValidated] = useState(false)
    const [OrderForm, setOrderForm] = useState(initialForm)
    const { email, phone, address1, address2, address3, house_address } = OrderForm
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
    const handleSubmit = async () => {
        if (!infoRef.current.checkValidity() || !addressRef.current.checkValidity() || !checkSelect()) {
            setValidated(true)
        }
        else {


            let listtmp = cartItems.map((item) => {
                console.log(cartItems);
                let tmp = {
                    product_id: productList.filter(e => e.slug === item.slug)[0].id,
                    slug: item.slug,
                    color: item.color,
                    size: item.size,
                    amount: item.quantity,
                    price: item.price
                }
                return tmp
            })
            let body = {
                user_id: user.id,
                address: `${house_address}, ${address3}, ${address2}, ${address1}`,
                list_product: listtmp

            }

            const rs = await axios.post(`${apiUrl}/cart/buy`, body)
            console.log(rs);
            dispatch(setAlert({
                message: "Đặt hàng thành công",
                type: "success"
            }))

            setValidated(false)
        }


    }
    const checkSelect = () => {
        let count = 0;
        if (address1 === "") {
            provinceRef.current.classList.add('active')
            provinceInvalidRef.current.classList.add('active')
            count++
        }
        if (address2 === "") {
            districtRef.current.classList.add('active')
            districtInvalidRef.current.classList.add('active')
            count++
        }
        if (address3 === "") {
            wardRef.current.classList.add('active')
            wardInvalidRef.current.classList.add('active')
            count++
        }
        return count === 0
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
        if (address1 !== "" && provinceRef.current && provinceInvalidRef.current) {
            provinceRef.current.classList.remove('active')
            provinceInvalidRef.current.classList.remove('active')
        }
    }, [address1, Province])
    useEffect(() => {
        let tmp = District.filter(item => item.Name === address2)[0]
        if (tmp)
            setWard(District.filter(item => item.Name === address2)[0].Wards)
        if (address2 !== "" && districtRef.current && districtInvalidRef.current) {
            districtRef.current.classList.remove('active')
            districtInvalidRef.current.classList.remove('active')
        }
    }, [address2, District])
    useEffect(() => {
        if (address3 !== "" && wardRef.current && wardInvalidRef.current) {
            wardRef.current.classList.remove('active')
            wardInvalidRef.current.classList.remove('active')
        }
    }, [address3])
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
                        <Form validated={validated} noValidate ref={infoRef} >
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
                            <Form validated={validated} noValidate ref={addressRef}>
                                <Form.Group className=' mb-3' >
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        value={house_address}
                                        name="house_address"
                                        onChange={onOrderFormChange}
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
                                        bsPrefix="form-select form-select-lg "
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
                                    <div className='p-2 invalidmess '>
                                        <div ref={provinceInvalidRef}>
                                            Vui lòng nhập tỉnh thành
                                        </div>
                                    </div>
                                </div>
                                <div className='order-leftcontent-main-content-info-select-item'>
                                    <Form.Select size="lg"
                                        required
                                        value={address2}
                                        name="address2"
                                        onChange={onOrderFormChangeDistrict}
                                        ref={districtRef}
                                        bsPrefix="form-select form-select-lg "
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
                                    <div className='p-2 invalidmess '>
                                        <div ref={districtInvalidRef}>
                                            Vui lòng nhập tỉnh thành
                                        </div>
                                    </div>
                                </div>
                                <div className='order-leftcontent-main-content-info-select-item '>
                                    <Form.Select size="lg"
                                        required
                                        value={address3}
                                        name="address3"
                                        ref={wardRef}
                                        bsPrefix="form-select form-select-lg "
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
                                    <div className='p-2 invalidmess '>
                                        <div ref={wardInvalidRef}>
                                            Vui lòng nhập tỉnh thành
                                        </div>
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