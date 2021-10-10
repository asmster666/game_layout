import React from 'react';

import Calendar from '../../../img/calendar-7-64.png';
import Heart from '../../../img/heart-68-64.png';
import Chats from '../../../img/chat-4-64.png';

import './blogItem.sass';

const BlogPost = (props: { title: string, date: string, likes: number, comments: number}) => {

    const blogPostInfo = [
        {
            src: `${Calendar}`,
            span: `${props.date}`,
        },
        {
            src: `${Heart}`,
            span: `${props.likes}`,
        },
        {
            src: `${Chats}`,
            span: `${props.comments}`,
        }
    ]

    return (
        <div className="blog-post">
            <div className="blog-img"></div>
            <p className="blog-title"><strong>{props.title}</strong></p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <div className="blog-data">
                {
                    blogPostInfo.map((post, i) => {
                        return (
                            <div key={i} className="blog-data_item">
                                <img src={post.src} alt=""/>
                                <span>{post.span}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogPost;