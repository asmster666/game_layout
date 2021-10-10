import React from 'react';
import BlogPost from './blogItem/blogPost';
import Title from '../blockTitle/blockTitle';

import './blog.sass';

const Blog = () => {

    const blogInfo = [
        {
            title: 'Portable Fashion for women',
            date: '13th Dec',
            likes: 15,
            comments: 10
        },
        {
            title: 'Portable Fashion for women',
            date: '8th Apr',
            likes: 67,
            comments: 40
        },
        {
            title: 'Portable Fashion for women',
            date: '3rd June',
            likes: 32,
            comments: 43
        },
    ]

    return (
        <div className="blog_block">
            <div className="container_wrap">
                <Title text={'Latest Blog Posts'} />
                <div className="blogs_wrap">
                    {
                        blogInfo.map((post, i) => {
                            return (
                                <BlogPost key={i} title={post.title} date={post.date} likes={post.likes} comments={post.comments} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;