import React from 'react';
import Quote from '../../img/quote.png';
import Star from '../../img/star-2-64.png';

import './reviews.sass';

const Reviews = () => {
    return (
        <div className="reviews_block">  
            <div className="reviews_container">
                <div className="review_info">
                    <img src={Quote} alt="99"/>
                    <p>Fanny Spencer</p>
                    <div className="review_stars">
                        {
                            [...Array(5)].map((star, i) => {
                                return (
                                    <img key={i} src={Star} alt="star"/>
                                )
                            })
                        }
                    </div>
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