import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/login-sign_modal/signSlice'
const RegisterModal = () => {
    const show = useSelector(state => state.signModal.value)
    const dispatch = useDispatch()


    return (
        <Modal
            show={show}
            onHide={() => dispatch(remove())}
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
                                                <div className="mb-5">
                                                    <h3 className="h4 font-weight-bold text-theme">Register</h3>
                                                </div>
                                                <h6 className="h5 mb-0">Just Do Register.</h6>
                                                <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Register.
                                                </p>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="yourName">Your name</label>
                                                        <input type="text" className="form-control" id="yourName" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" />
                                                    </div>
                                                    <div className="form-group mb-5">
                                                        <label htmlFor="exampleInputPassword1">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                                    </div>
                                                    <button type="submit" className="btn btn-theme">Register</button>
                                                </form>
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

                            <p className="text-muted text-center mt-3 mb-0">Already have an account? <a 
                                className="text-primary ml-1">login</a></p>

                        </div>

                    </div>

                </div>
            </ModalBody>
        </Modal>
    )
}

export default RegisterModal