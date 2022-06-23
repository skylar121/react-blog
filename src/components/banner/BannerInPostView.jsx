import React from 'react'
import './bannerInPostView.css'


export default function BannerInPostView({mainBg, created}) {
	const createdDate = new Date(created);
	const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	function checkMonth(createdDate) {
		return month[createdDate.getMonth()];
	}

	function checkDate(createdDate) {
		return createdDate.getDate();
	}
	
	function checkDay(createdDate) {
		return day[createdDate.getDay()];
	}

	return (
		<div className="banner" style={{backgroundImage: `url(../..${mainBg})`}}>

			<div className="max-width">
				<div className="banner-contents">
					<p className="today">{checkMonth(createdDate)} <em>{checkDate(createdDate)}</em> {checkDay(createdDate)}</p>
				</div>
			</div>
		</div>
	)
}