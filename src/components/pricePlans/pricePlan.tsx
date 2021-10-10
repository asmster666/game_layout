import React from 'react';
import PriceItem from './priceItem/priceItem';
import Title from '../blockTitle/blockTitle';

import './pricePlan.sass';

const PricePlan = () => {

    interface PackParams {
        name: string,
        price: number,
        isActive: boolean
    }

    const pricesInfo = [
        {
            name: 'Silver',
            price: 69,
            isActive: false,
        },
        {
            name: 'Golden',
            price: 109,
            isActive: true,
        },
        {
            name: 'Platinum',
            price: 199,
            isActive: false,
        }
    ] as PackParams []

    return (
        <div className="price-plan_block">
            <div className="container_wrap">
                <Title text={'Pricing Plans'} />
                <div className="prices_container">
                    {
                        pricesInfo.map((pack, i) => {
                            return (
                                <PriceItem key={i} name={pack.name} price={pack.price} active={pack.isActive} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PricePlan;