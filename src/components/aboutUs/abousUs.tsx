import React from 'react';
import Motoguy from '../../img/about_img.png';

import './aboutUs.sass';

const AboutUs = () => {
    return ( 
        <div className="about-us_block">
            <div className="container_wrap"> 
                <div className="block_purple-color">
                    <div className="text-wrap">
                        <div className="underline"><strong>ABOUT US</strong></div>
                        <h2>We Believe that Interior beauty Lasts Long</h2>
                        <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
                <div className="img-wrap">
                    <img src={Motoguy} alt="man-on-moto"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;