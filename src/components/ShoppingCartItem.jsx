import React from 'react'
import '../styles/ShoppingCartItem.scss'

const ShoppingCartItem = () => {
    return (
        <div className="shopping-cart">
                <figure>
                    <img src="assets/round-shelf.webp" alt=""/>
                </figure>
                <p>Round shelf</p>
                <p>$ 120,00</p>
                <img src="/assets/icons/icon_close.png" alt="close"/>
            </div>
    );
}

export default ShoppingCartItem;