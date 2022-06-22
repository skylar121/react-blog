import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import '../css/postview.css'
import '../css/wrapbox.css'

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Author from '../components/author/Author';
import { LikeBtn } from '../components/buttons/Buttons'
import Category from '../components/category/Category';
import BannerInPostView from '../components/banner/BannerInPostView';

export default function PostView() {
	const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const [post, setpost] = useState({});
    const getpostData = async () => {
        const response = await fetch('/data.json')
        const json = await (response.json());
        setpost(json.posts[parseInt(id)-1]);
		setLoaded(true);
    };
    useEffect(()=> {
        getpostData();
    }, []);

	return (
		<>
			{loaded ? <>
				<Header />
				<BannerInPostView id={id} mainBg={post.mainBg} created={post.created}/>
				<div className="view">
					<div className="max-width">
						<section className="wrap-box">
							<div className="inner">
					<Author userName={post.userName} img="../../assets/profile.jpg" date={post.created}/>
					<Category category={post.category} />
								<div className="title-wrap">
									<h2>{post.title}</h2>
									<LikeBtn />
								</div>
								<hr />
								<div className="view-contents">
									{post.contents.map((item) => {
										if(item.type === 'img') {
											return <img src={'../.'+item.src} alt=""/>
										}
										else { return <p>{item.text}</p>}
									})}
								</div>
								<div className="btn-group">
									<a href="#none" className="btn-modify">
										<span className="a11y-hidden">modify</span>
									</a>
									<button type="button" className="btn-delete">
										<span className="a11y-hidden">delete</span>
									</button>
								</div>
								<a href="./" className="btn-back">
									<span className="a11y-hidden">Back</span>
								</a>
							</div>
						</section>
					</div>
				</div>
				<Footer />
			</> 
			: <p>로딩중...</p>
			}
		</>
	)
}
