import React, { useEffect, useState } from 'react'
import productData from '../assets/fake-data/products'
import ProductView from './ProductView'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/product-modal/productModalSlice'
const ProductViewModal = () => {

    const productSlug = useSelector((state) => state.productModal.value)

    const dispatch = useDispatch()

    const [product, setproduct] = useState(undefined)
    /*  const product =  */

    useEffect(() => {
        setproduct(productData.getProductBySlug(productSlug))
    }, [productSlug])
    return (
        <div className={`product-view-modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view-modal-content">
                <ProductView product={product} />
                <div className="product-view-modal-content-close">
                    <Button
                        size='sm'
                        onclick={() => dispatch(remove())}
                    >
                        đóng
                    </Button>
                </div>
            </div>

        </div>
    )
}
export default ProductViewModal
