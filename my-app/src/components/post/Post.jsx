import React from 'react'
import './post.css'

import Category from '../category/Category'
import Author from '../author/Author'

export default function Post({data}) {
  const {thumbnail, title, category, contents, profileImg, created, userName, id} = data; // = posts[index]
    return (
        <li key={id - 1}>
            <a className="post">
                <article>
                    <img src={'../.'+ thumbnail} alt="" />
                    <div className="contents-wrap">
                        <Category category={category} />
                        <h3>{title}</h3>
                        <Author userName={userName} img={profileImg} date={created}/>
                        <p className="post-description">
                            {contents[0].text}
                        </p>
                    </div>
                </article>
            </a>
        </li>
    )
}
