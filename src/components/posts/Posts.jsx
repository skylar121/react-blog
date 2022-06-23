import React, { useState, useEffect } from 'react'

import Post from '../post/Post'
import './posts.css'

export default function Posts() {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState({});
    const getPostsData = async () => {
        const response = await fetch('/data.json')
        const json = await (response).json();
        setPosts(json.posts);
        setLoaded(true);
    };
    useEffect(()=> {
        getPostsData();
    }, []);

    const postArr = [];
    for (let i = 0; i < posts.length; i++) {
        postArr.push(<Post key={i+1} data={posts[i]}/>)
    }    

    return (
        <>
        { loaded ? <ul className="posts">
        {/* reverse는 최신 게시물이 맨위로 오도록 */}
        {postArr.reverse()}
        </ul> 
        : 
        <p>로딩중...</p> }
        </>
            
    )
}