import React from 'react';
import Title from '../blockTitle/blockTitle';

import Motoguy from '../../img/blog_img2.png';
import Target from '../../img/gallery_img3.png';
import Castle from '../../img/blog_img3.png';
import Player from '../../img/blog_img1.png';
import Eye from "../../img/eye-64.png";

import './gallery.sass';

const Gallery = () => {
    return (
        <div className="gallery_block">
            <div className="container_wrap">
                <Title text={'Screens Gallery'} />
                <div className="gallery_imgs">
                    <div className="blocks-wrap">
                        <div className="img_block1">
                            <ImgWrap className={"img_wrap"} firstSrc={Motoguy} />
                            <ImgWrap className={"img_wrap"} firstSrc={Castle} />
                        </div>
                        <ImgWrap className={"img_wrap  img_block2"} firstSrc={Target} />
                    </div>
                    <ImgWrap className={"img_wrap  img_block3"} firstSrc={Player} />
                </div>
            </div>
        </div>
    )
}

function ImgWrap(props: {className: string, firstSrc: string}):JSX.Element  {
    return (
        <div className={props.className}>
            <img src={props.firstSrc} alt=""/>
        </div> 
    )
}

export default Gallery;