import { useContext } from 'react';

import Post from '../post/Post'
import './posts.css'
import { BlogContext } from '../../contexts/BlogContext';

export default function Posts() {
    const { blogData } = useContext(BlogContext);

    const postArr = [];
    for (let i = 0; i < blogData.posts.length; i++) {
        postArr.push(<Post key={i+1} data={blogData.posts[i]}/>)
    }    

    return (
        <>
            <ul className="posts">
            {/* reverse는 최신 게시물이 맨위로 오도록 */}
            {postArr.reverse()}
            </ul> 
        </>
    )
}