import React from 'react';

const PriceItem = (props: {name: string, price: number, active: boolean}) => {
    return (
        <div className="price-item">
            <div>{props.name} Package</div>
            <div>${props.price}</div>
            <ul>
                <li>Basic hair Cut</li>
                <li>Basic hair Cut</li>
                <li>Basic hair Cut</li>
            </ul>
            <button className={props.active ? "active" : ""} >ORDER NOW</button>
        </div>
    )
}

export default PriceItem;