import React, { useContext, useNavigate } from 'react'
import './posts.css'

import Post from '../post/Post'
import blogData from '../../contexts/blogData'

export default function Posts() {
    const { posts } = useContext(blogData);
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/post-view/'+ posts[0].id);
    // };
    const postArr = [];
    for (let i = 0; i < posts.length; i++) {
        
        postArr.push(<Post data={posts[i]}/>)
    }    

    return (
            <ul className="posts">
                {postArr.reverse()}
            </ul>
    )
}