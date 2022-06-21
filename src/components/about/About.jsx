import React, { useContext } from 'react'
import blogData from '../../contexts/blogData'

import './about.css'

import profileImg from '../../assets/profile.jpg'
import iconFacebook from '../../assets/Facebook.svg'
import iconTwitter from '../../assets/Twitter.svg'
import iconInstagram from '../../assets/Instagram.svg'
import iconGithub from '../../assets/Github.svg'

export default function About() {
    const { users } = useContext(blogData);
    let categoriesArr = [];
    for (let i = 0; i < users[0].category.length; i++) {
        categoriesArr.push(<li><a href="#">{users[0].category[i]}</a></li>)
    }
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src={profileImg} alt="" className="user-profile" />
            <p className="user-name">{users[0].name}</p>
            <p className="user-description">{users[0].userInfo}</p>
            <h3>Categories</h3>
            <ul className="categories">
                {categoriesArr}
            </ul>
            <h3>Follow</h3>
            <ul className="sns">
                <li key='facebook'>
                    <a href="#">
                        <img src={iconFacebook} alt="Facebook" />
                    </a>
                </li>
                <li key='twitter'>
                    <a href="#">
                        <img src={iconTwitter} alt="Twitter" />
                    </a>
                </li>
                <li key='instagram'>
                    <a href="#">
                        <img src={iconInstagram} alt="Instagram" />
                    </a>
                </li>
                <li key='github'>
                    <a href="#">
                        <img src={iconGithub} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}
