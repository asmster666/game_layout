import React from 'react';

import './header.sass';

export default function Header(): JSX.Element {
    return (
        <header>
            <div className="header_block1">
                <div className="container_wrap">
                    <img src="../../img/logo.png" alt="header_logo"/>
                    
                    <nav>
                        <a className="active">HOME</a>
                        <a>ABOUT</a>
                        <a>GALLERY</a>
                        <a>PAGES</a>
                        <a>BLOG</a>
                        <a>CONTACT</a>
                    </nav>

                    <button>JOIN US</button>
                </div>
            </div>
            <div className="header_block2">
                <div className="container_wrap">
                    <div  className="block_item1">
                        <img alt="blocks_img"/>
                    </div>
                    <div className="block_item2">
                        <div>For All Occasion Hairstyle is a Must Try Fashion</div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>

                        <div>
                            <button></button>
                            <span>WATCH VIDEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}