import React from 'react'
import '../styles/ProductInfo.scss'

const ProductInfo = () => {
    return (
        <>
            <img src="assets/round-shelf.webp" alt="" class="product-img" />
            <div className="product-info">
                <div>
                    <p>$ 120,00</p>
                    <p>Round shelf</p>
                </div>
                <figure>
                    <img src="assets/icons/bt_add_to_cart.svg" alt="" />
                </figure>
            </div>
        </>
    );
}

export default ProductInfo;