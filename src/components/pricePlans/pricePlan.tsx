import React from 'react';
import PriceItem from './priceItem/priceItem';
import Title from '../blockTitle/blockTitle';

import './pricePlan.sass';

const PricePlan = () => {
    return (
        <div className="price-plan_block">
            <div className="container_wrap">
                <Title text={'Pricing Plans'} />
                <div className="prices_container">
                    <PriceItem name={'Silver'} price={69} active={false} />
                    <PriceItem name={'Golden'} price={109} active={true} />
                    <PriceItem name={'Platinum'} price={199} active={false} />
                </div>
            </div>
        </div>
    )
}

export default PricePlan;