import React, { useLayoutEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import '../css/postview.css'
import '../css/wrapbox.css'

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Author from '../components/author/Author';
import { LikeBtn, PostModifyBtn, PostDeleteBtn, PreviousPageBtn } from '../components/buttons/Buttons'
import Category from '../components/category/Category';
import BannerInPostView from '../components/banner/BannerInPostView';
import { BlogContext } from '../contexts/BlogContext';

export default function PostView() {
	const { blogData } = useContext(BlogContext);
    const { id } = useParams();
	const idNum = parseInt(id);
	let post = {};
	for (let i = 0; i < blogData.posts.length; i++) {
		if (idNum === blogData.posts[i].id) {
			post = blogData.posts[i];
		}
	}
	
    useLayoutEffect(() => {
        window.scrollTo({top: 0, left: 0});
    })

	return (
		<>
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
									else {
										return <p>{item.text}</p>
									}
								})}
							</div>
							<div className="btn-group">
								<PostModifyBtn />
								<PostDeleteBtn />
							</div>
							<PreviousPageBtn />
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</>
	)
}
