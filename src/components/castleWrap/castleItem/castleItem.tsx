import React from 'react';
import Knight from '../../../img/recent_up.png';

import './castleItem.sass';

export default function CastleItem(): JSX.Element {
    return (
        <div className="castleItem">
            <img src={Knight} alt="knight"/>
            <div className="castleItem_wrap">
                <div>ABOUT US</div>
                <h2>We Believe that Interior beauty Lasts Long</h2>
                <p> 
                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.
                </p>
                <button>LEARN MORE</button>
            </div>
        </div>
    )
}