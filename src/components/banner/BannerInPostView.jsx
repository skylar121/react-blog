import React from 'react'
import './bannerInPostView.css'


export default function BannerInPostView({mainBg, created}) {
	return (
		<div className="banner" style={{backgroundImage: `url(../..${mainBg})`}}>

			<div className="max-width">
				<div className="banner-contents">
					<p className="today">May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
	)
}