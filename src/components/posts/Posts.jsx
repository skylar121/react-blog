import React, { useState, useEffect } from 'react'

import Post from '../post/Post'
import './posts.css'

export default function Posts() {
    const [posts, setPosts] = useState({});
    const getPostsData = async () => {
        const response = await fetch('/data.json')
        const json = await (response).json();
        setPosts(json.posts);
    };
    useEffect(()=> {
        getPostsData();
    }, []);

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