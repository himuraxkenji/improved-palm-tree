import React from 'react'
import '../styles/OrderItem.scss'

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src="assets/round-shelf.webp" alt="" />
            </figure>
            <p>Round shelf</p>
            <p>$ 120,00</p>
        </div>
    );
}

export default OrderItem;