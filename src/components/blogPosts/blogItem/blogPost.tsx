import React from 'react';

import './blogItem.sass';

const BlogPost = (props: {img: string, title: string, date: string, likes: number, comments: number}) => {
    return (
        <div className="blog-post">
            <img alt=""/>
            <p className="blog-title"><strong>{props.title}</strong></p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <div className="blog-data">
                <div className="blog-data_item">
                    <img alt="date"/>
                    <span>{props.date}</span>
                </div>
                <div className="blog-data_item">
                    <img alt="likes"/>
                    <span>{props.likes}</span>
                </div>
                <div className="blog-data_item">
                    <img alt="comments"/> 
                    <span>{props.comments}</span>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;