import React, { useState } from 'react';
import BurgerMenu from '../burgerMenu/burgerMenu';

import Logo from "../../img/logo.png";
import BlockAbstraction from '../../img/banner/home-left.png';
import './header.sass';

export default function Header(): JSX.Element {

    const [isOpen, setIsOpen] = useState(false);
    const [isBurger, setIsBurger] = useState(true);

    return (
        <header>
            <div className="header_block1">
                <div className="container_wrap">
                    <div className="logo-wrap">
                        <img src={Logo} alt="header_logo"/>
                    </div>
                    <Menu isBurger={!isBurger} />
                    <button>JOIN US</button>
                    <div 
                        className={isOpen ? "burg-cross" : "burger_menu"}
                        onClick={() => setIsOpen(!isOpen)}
                    ></div>
                </div>
                <div className={isOpen ? "" : "hide-burger"}>
                    <Menu isBurger={isBurger} />
                </div>
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

export function Menu(props: {isBurger: boolean}):JSX.Element {

    const menuOption = ['HOME', 'ABOUT', 'GALLERY', 'PAGES', 'BLOG', 'CONTACT']

    return (
        <div className={props.isBurger ? "burger" : "nav"}>
            {
                menuOption.map((option, i) => {
                    return (
                        <a key={i}><strong>{option}</strong></a>
                    )
                })
            }
        </div>
    )
}