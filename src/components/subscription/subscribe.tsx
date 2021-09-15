import React from 'react';

import './subscribe.sass';

const Subscription = () => {
    return (
        <div className="subscribe_block">
            <div className="container_wrap">
                <div className="subscribe_wrap">
                    <div className="subscribe-left">
                        <h3>Subscribe Our Newsletter</h3>
                        <span>We won’t send any kind of spam</span>
                    </div>
                    <div className="subscribe-right">
                        <input type="text" placeholder="Enter your email address" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription;