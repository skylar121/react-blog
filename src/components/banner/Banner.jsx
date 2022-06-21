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

function BannerInPostView({id}) {
	return (
		<div className="banner" style={{backgroundImage: `url(../images/post-background${id}.jpg)`}}>
			<div className="max-width">
				<div className="banner-contents">
					<p className="today">May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
	)
}


export {Banner, BannerInPostView} 