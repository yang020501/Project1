import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginModal } from '../redux/login-sign_modal/loginSlice'
import { removeSignModal } from '../redux/login-sign_modal/signSlice'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import address from '../assets/fake-data/address.json'
const RegisterModal = () => {
    const initialForm = {
        username: "",
        password: "",
        rpassword: "",
        customer_name: "",
        phone: "",
    }

    const dispatch = useDispatch()
    const [RegisterForm, setRegisterForm] = useState(initialForm)
    const show = useSelector(state => state.signModal.value)
    const [alert, setAlert] = useState(null)
    const { username, password, rpassword, customer_name, phone } = RegisterForm
    const [validated, setValidated] = useState(false);

    const gotoLogin = () => {
        dispatch(removeSignModal())
        dispatch(setLoginModal())
    }
    const onRegisterFormChange = e => {
        setRegisterForm({
            ...RegisterForm,
            [e.target.name]: e.target.value,

        })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            setValidated(true);
        }
        else {

            setValidated(false)
        }

    };
    useEffect(() => {
        setRegisterForm(initialForm)
        setValidated(false)
        setAlert(null)
    }, [show])
    return (
        <Modal
            show={show}
            onHide={() => dispatch(removeSignModal())}
            backdrop={"static"}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <ModalHeader closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Register Form
                </Modal.Title>
            </ModalHeader>
            <ModalBody>
                <div id="main-wrapper" className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="card border-0">
                                <div className="card-body p-0">
                                    <div className="row no-gutters">
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="mb-3">
                                                    <h3 className="h4 font-weight-bold text-theme">Register</h3>
                                                </div>
                                                <h6 className="h5 mb-0">Just Do Register.</h6>
                                                <p className="text-muted mt-2 mb-3">If You Really Want To Know, Look In The Register.
                                                </p>
                                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <Form.Group >
                                                        <Form.Label>Họ và tên</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            value={customer_name}
                                                            name="customer_name"
                                                            onChange={onRegisterFormChange}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please input email.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="email"
                                                            placeholder=""
                                                            value={username}
                                                            name="username"
                                                            onChange={onRegisterFormChange}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please input email.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label>Mật khẩu</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="password"
                                                            value={password}
                                                            name="password"
                                                            onChange={onRegisterFormChange}

                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please input password.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label>Mật khẩu</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="password"
                                                            value={rpassword}
                                                            name="rpassword"
                                                            onChange={onRegisterFormChange}

                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please input repeat password.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <button type="submit" className="btn btn-theme mt-3">Register</button>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-none d-lg-inline-block">
                                            <div className="account-block rounded-right">
                                                <div className="overlay rounded-right"></div>
                                                <div className="account-testimonial">
                                                    <h4 className="text-white mb-4">This beautiful theme yours!</h4>
                                                    <p className="lead text-white">"Best investment i made for a long time. Can only
                                                        recommend it for other users."</p>
                                                    <p>- Admin User</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="text-muted text-center mt-3 mb-0 d-flex justify-content-center" >Already have an account? &nbsp;<div
                                className="text-primary ml-1 modalmove" onClick={() => gotoLogin()}> Login</div></div>

                        </div>

                    </div>

                </div>
            </ModalBody>
        </Modal>
    )
}

export default RegisterModal