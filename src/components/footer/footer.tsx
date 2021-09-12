import React, { useState } from 'react';
import FooterGroup from './footerGroup/footerGroup';

import './footer.sass';

const Footer = () => {

    return (
        <footer>
            <div className="container_wrap">
                <div className="footer-groups_wrap">
                    <div className="footer-groups_item1">
                        <FooterGroup name={'About Farly'} arr={['For Business', 'Premium Plans', 'Reviews', 'How it Works', 'Farfly Blog']} />
                        <FooterGroup name={'Company'} arr={['Product Tour', 'Pricing', 'Founding Members', 'Case Studies', 'Product Updates']} />
                    </div>
                    <div className="footer-groups_item2">
                        <FooterGroup name={'Support'} arr={['Documentation', 'Data Security', 'Site Perfomance', 'Action Plan', 'Resources']} />
                        <FooterGroup name={'Legal'} arr={['Terms and conditions', 'Privacy Policy', 'Cookie Information', 'Opt-Out']} />
                    </div>
                </div>
                <div className="rights">
                    <div>Copyright.2021 All rights reserved</div>
                    <div className="socials">
                        <img alt="fb"/>
                        <img alt="twit"/>
                        <img alt="cr"/>
                        <img alt="be"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;