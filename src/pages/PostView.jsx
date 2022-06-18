import React, { useContext } from 'react'
import '../css/postview.css'

import blogData from '../contexts/blogData'

export default function PostView() {
    const { posts } = useContext(blogData);
    
  return (
    <div>PostView</div>
  )
}
