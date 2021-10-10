import React from 'react';
import FooterGroup from './footerGroup/footerGroup';

import Fb from "../../img/facebook-64.png";
import Twit from "../../img/twitter-64.png";
import Be from "../../img/behance-64.png";
import Github from "../../img/github-6-64.png";

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
                        <div>
                            <img src={Fb} alt="fb"/>
                        </div>
                        <div>
                            <img src={Twit} alt="twitter"/>
                        </div>
                        <div>
                            <img src={Github} alt="github"/>
                        </div>
                        <div>
                            <img src={Be} alt="behance"/>
                        </div>
                    </div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;