import React from 'react';

import './priceItem.sass';

const PriceItem = (props: {name: string, price: number, active: boolean}) => {
    return (
        <div className="price-item">
            <div className="price_name"><strong>{props.name} Package</strong></div>
            <div className="price_value"><strong>${props.price}</strong></div>
            <ul>
                <li>Basic hair Cut</li>
                <li>Basic hair Cut</li>
                <li>Basic hair Cut</li>
            </ul>
            <div className="border-wrap">
                <div className={props.active ? "active button" : "button"} >ORDER NOW</div>
            </div>
        </div>
    )
}

export default PriceItem;