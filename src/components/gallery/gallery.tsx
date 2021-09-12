import React from 'react';
import Title from '../blockTitle/blockTitle';

const Gallery = () => {
    return (
        <div className="gallery_block">
            <div className="container_wrap">
                <Title text={'Screens Gallery'} />
                <div className="gallery_imgs"></div>
            </div>
        </div>
    )
}

export default Gallery;