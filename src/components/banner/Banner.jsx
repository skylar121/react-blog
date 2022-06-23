import React, { useContext } from 'react'
import './banner.css'
import { BlogContext } from '../../contexts/BlogContext'

export default function Banner() {
	const { blogData } = useContext(BlogContext);
    return (
        <div className="banner">
			<div className="max-width">
				<div className="banner-contents">
					<p className="sub-text">React Blog</p>
					<p className="main-text">{blogData.blog.mainTitle}</p>
					<p className="description">
						{blogData.blog.description}
					</p>
				</div>
			</div>
		</div>
    )
}