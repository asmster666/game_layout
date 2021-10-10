import React, { useState } from 'react';
import BurgerMenu from '../burgerMenu/burgerMenu';

import Logo from "../../img/logo.png";
import BlockAbstraction from '../../img/banner/home-left.png';
import './header.sass';

export default function Header(): JSX.Element {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    return (
        <header>
            <div className="header_block1">
                <div className="container_wrap">
                    <div className="logo-wrap">
                        <img src={Logo} alt="header_logo"/>
                    </div>
                    <nav>
                        <a className="active"><strong>HOME</strong></a>
                        <a><strong>ABOUT</strong></a>
                        <a><strong>GALLERY</strong></a>
                        <a><strong>PAGES</strong></a>
                        <a><strong>BLOG</strong></a>
                        <a><strong>CONTACT</strong></a>
                    </nav>
                    <button>JOIN US</button>
                    <div 
                        className={isBurgerOpen ? "burg-cross" : "burger_menu"}
                        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                    ></div>
                </div>
                <BurgerMenu isOpen={isBurgerOpen} />
            </div>
            <div className="header_block2">
                <div className="container_wrap">
                    <div  className="block_item1">
                        <div className="item1_img">
                            <img src={BlockAbstraction} alt="abstraction"/>
                        </div>
                    </div>
                    <div className="block_item2">
                        <div className="block_item2_title"><strong>For All Occasion Hairstyle is a Must Try Fashion</strong></div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>

                        <div className="block_item2_btn-wrap">
                            <button></button>
                            <span>WATCH VIDEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}