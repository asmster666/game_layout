import React from 'react';
import BlogPost from './blogItem/blogPost';
import Title from '../blockTitle/blockTitle';

import './blog.sass';

const Blog = () => {
    return (
        <div className="blog_block">
            <div className="container_wrap">
                <Title text={'Latest Blog Posts'} />
                <div className="blogs_wrap">
                    <BlogPost title={'Portable Fashion for women'} date={'13th Dec'} likes={15} comments={10} />
                    <BlogPost title={'Portable Fashion for women'} date={'8th Apr'} likes={67} comments={40} />
                    <BlogPost title={'Portable Fashion for women'} date={'3rd June'} likes={32} comments={43} />
                </div>
            </div>
        </div>
    )
}

export default Blog;