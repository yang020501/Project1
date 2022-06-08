import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAlert } from '../redux/alert-message/alertMessage'
const AlertMessage = () => {
    const alert = useSelector(state => state.alertMessage)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeAlert())
        }, 5000)
    }, [alert])
    return (
        <div className='container'>
            <div className='alert-message'>
                <div className={` ${alert.state ? 'active' : ''}`}>
                    <div className={`alert alert-${alert.type} d-flex align-items-center`} role="alert">
                        {alert.type === "warning" ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16" role="img" aria-label="Success:">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        }
                        <div>
                            {alert.message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AlertMessage