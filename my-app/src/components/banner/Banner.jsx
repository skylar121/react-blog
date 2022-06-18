import React, { useContext } from 'react'
import './banner.css'
import blogData from '../../contexts/blogData'

function Banner() {
	const { blog } = useContext(blogData);
    return (
        <div className="banner">
			<div className="max-width">
				<div className="banner-contents">
					<p className="sub-text">React Blog</p>
					<p className="main-text">{blog.mainTitle}</p>
					<p className="description">
						{blog.description}
					</p>
				</div>
			</div>
		</div>
    )
}



export default Banner