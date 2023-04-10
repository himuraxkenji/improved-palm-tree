import React from 'react'
import '@styles/OrderItem.scss'
import roundShelf from '@images/round-shelf.webp'

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src={roundShelf} alt="" />
            </figure>
            <p>Round shelf</p>
            <p>$ 120,00</p>
        </div>
    );
}

export default OrderItem;