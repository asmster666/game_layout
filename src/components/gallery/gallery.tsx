import React from 'react';
import Title from '../blockTitle/blockTitle';

import Motoguy from '../../img/blog_img2.png';
import Target from '../../img/gallery_img3.png';
import Castle from '../../img/blog_img3.png';
import Player from '../../img/blog_img1.png';

import './gallery.sass';

const Gallery = () => {
    return (
        <div className="gallery_block">
            <div className="container_wrap">
                <Title text={'Screens Gallery'} />
                <div className="gallery_imgs">
                    <div className="img_block1">
                        <div className="img_wrap">
                            <img src={Motoguy} alt="motoguy"/>
                        </div>
                        <div className="img_wrap">
                            <img src={Target} alt="target"/>
                        </div>
                    </div>
                    <div className="img_wrap img_block2">
                        <img src={Castle} alt="castle"/>
                    </div>
                    <div className="img_wrap img_block3">
                        <img src={Player} alt="player"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;