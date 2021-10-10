import React from 'react';
import './burgerMenu.sass';

export default function BurgerMenu(props: {isOpen: boolean}):JSX.Element {
    return (
        <div className={props.isOpen ? "burger-menu" : "hide-burger"}>
            <a className="active"><strong>HOME</strong></a>
            <a><strong>ABOUT</strong></a>
            <a><strong>GALLERY</strong></a>
            <a><strong>PAGES</strong></a>
            <a><strong>BLOG</strong></a>
            <a><strong>CONTACT</strong></a>
        </div>
    )
}