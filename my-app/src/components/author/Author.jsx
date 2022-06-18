import React from 'react';
import './author.css'

function Author({userName, img, date}) {
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author"><img src={img} alt=""/>{userName}</dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">{date}</dd>
        </dl>
    );
}

export default Author;