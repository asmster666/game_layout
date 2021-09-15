import React from 'react';

import './header.sass';

export default function Header(): JSX.Element {
    return (
        <header>
            <div className="header_block1">
                <div className="container_wrap">
                    <div className="logo-wrap">
                        <img src="../../img/logo.png" alt="header_logo"/>
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
                </div>
            </div>
            <div className="header_block2">
                <div className="container_wrap">
                    <div  className="block_item1">
                        <div className="item1_img"></div>
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