import React from 'react'
import '../styles/ProductItem.scss';

const ProductItem = () => {
    return (
        <div className="ProductItem">
            <img src="assets/round-shelf.webp" alt=""/>
                <div className="product-info">
                    <div>
                        <p>$ 120,00</p>
                        <p>Round shelf</p>
                    </div>
                    <figure>
                        <img src="assets/icons/bt_add_to_cart.svg" alt=""/>
                    </figure>
                </div>
        </div>
    );
}

export default ProductItem;