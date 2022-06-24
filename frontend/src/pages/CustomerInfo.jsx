import React from 'react'
import Table from 'react-bootstrap/Table'
const CustomerInfo = () => {
    return (
        <div className='customer-info'>
            <div className="customer-info-header">
                Tài khoản của tôi
            </div>
            <div className="customer-info-content">
                <div className="customer-info-content-left">
                    <div className="customer-info-content-left-header">
                        Lịch sử đơn hàng
                    </div>
                    <div className="customer-info-content-left-table">
                        <Table responsive hover striped variant='info'>
                            <thead>
                                <tr>
                                    <th >Đơn hàng</th>
                                    <th >First</th>
                                    <th >Last</th>
                                    <th >Handle</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th >2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th >3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="customer-info-content-right">
                    <div className="customer-info-content-right-header">
                        Chi tiết tài khoản
                    </div>
                    <div className="customer-info-content-right-user">
                       Tài khoản
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo