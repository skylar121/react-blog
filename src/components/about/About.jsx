import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from '../../contexts/BlogContext'

import Category from '../category/Category'
import './about.css'

import profileImg from '../../assets/profile.jpg'
import iconFacebook from '../../assets/Facebook.svg'
import iconTwitter from '../../assets/Twitter.svg'
import iconInstagram from '../../assets/Instagram.svg'
import iconGithub from '../../assets/Github.svg'

export default function About() {
	const { blogData } = useContext(BlogContext);
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src={profileImg} alt="" className="user-profile" />
            <p className="user-name">{blogData.users[0].name}</p>
            <p className="user-description">{blogData.users[0].userInfo}</p>
            <h3>Categories</h3>
            <ul className="categories">
                {blogData.users[0].category.map((item, index) => {
                    return (
                        <li key={index}><Link to={''}>{item}</Link></li>
                    )
                })}
            </ul>
            {/* <Category category={blogData.users[0].category}/> */}

            <h3>Follow</h3>
            <ul className="sns">
                <li key={'facebook'}>
                    <Link to={''}>
                        <img src={iconFacebook} alt="Facebook" />
                    </Link>
                </li>
                <li key={'twitter'}>
                    <Link to={''}>
                        <img src={iconTwitter} alt="Twitter" />
                    </Link>
                </li>
                <li key={'instagram'}>
                    <Link to={''}>
                        <img src={iconInstagram} alt="Instagram" />
                    </Link>
                </li>
                <li key={'github'}>
                    <Link to={''}>
                        <img src={iconGithub} alt="GitHub" />
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
