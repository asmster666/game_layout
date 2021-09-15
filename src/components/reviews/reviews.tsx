import React from 'react';

import './reviews.sass';

const Reviews = () => {
    return (
        <div className="reviews_block">  
            <div className="reviews_container">
                <div className="review_info">
                    <img src={'../../img/quote.png'} alt="99"/>
                    <p>Fanny Spencer</p>
                    <img alt="stars"/>
                </div>
                <div className="review_text">
				As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face 
                </div>
            </div>
        </div>
    )
}

export default Reviews;

// should be slider with touch mouse event