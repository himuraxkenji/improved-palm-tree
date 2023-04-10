import React from 'react'
import '@styles/ProductItem.scss';
import roundShelf from '@images/round-shelf.webp'
import addToCart from '@icons/bt_add_to_cart.svg'


const ProductItem = () => {
    return (
        <div className="ProductItem">
            <img src={roundShelf} alt=""/>
                <div className="product-info">
                    <div>
                        <p>$ 120,00</p>
                        <p>Round shelf</p>
                    </div>
                    <figure>
                        <img src={addToCart} alt=""/>
                    </figure>
                </div>
        </div>
    );
}

export default ProductItem;