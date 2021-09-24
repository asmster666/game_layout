import React, { useState } from 'react';
import FaqItem from './faqItem/faqItem';
import Title from '../blockTitle/blockTitle';

import './faq.sass';

export default function Faq(): JSX.Element {

    const [arr, setArr] = useState(Array(6).fill(null));

    return (
        <div className="faq_block">
            <div className="container_wrap">
                <Title text={'Frequently Asked Questions'} />
                <div className="questions_table">
                    { arr.map((elem, i) => <FaqItem key={i} />) }
                </div>
            </div>
        </div>
    )
}