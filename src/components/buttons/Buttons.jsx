import { Link } from 'react-router-dom';
import "./buttons.css"

import profileImg from '../../assets/profile.jpg'
import iconModifyWhite from '../../assets/icon-modify-white.svg'
import iconLogOut from '../../assets/icon-logout.svg'
import iconLogin from '../../assets/icon-login.svg'
import iconRegister from '../../assets/icon-register.svg'
import { useState } from 'react';

function Profile() {
    return (
        <li className="profile-img">
            <Link to={''}>
                <img src={profileImg} alt="My Page" />
            </Link>
        </li>
    )
}

function WriteBtn() {
    return (
        <li>
            <Link to={''} className="button">
                <img src={iconModifyWhite} alt="" />
                <span>Write</span>
            </Link>
        </li>
    )
}

function LogoutBtn({onClick}) {
    return (
        <li onClick={onClick}>
            <button className="button white">
                <img src={iconLogOut} alt="" />
                <span>Logout</span>
            </button>
        </li>
    )
}

function LoginBtn({onClick}) {
    return (
        <li onClick={onClick}>
            <Link to={''} className="button gray">
                <img src={iconLogin} alt="" />
                <span>Login</span>
            </Link>
        </li>
    )
}

function RegisterBtn({onClick}) {
    return (
        <li className="only-pc" onClick={onClick}>
            <Link to={''} className="button gray">
                <img src={iconRegister} alt="" />
                <span>Register</span>
            </Link>
        </li>
    )
}

function LikeBtn(){
    const [isLiked, setIsLiked] = useState(false);
    function handleClickLikeBtn (e) {
        setIsLiked((curr) => !curr);
    }
    return (
        <button className={isLiked? "btn-like active" : "btn-like"} onClick={handleClickLikeBtn}>
            Like
        </button>
    )
}

function PostModifyBtn() {
    return (
        <Link to={''} className="btn-modify">
            <span className="a11y-hidden">modify</span>
        </Link>
    )
}

function PostDeleteBtn() {
    return (
        <button type="button" className="btn-delete">
            <span className="a11y-hidden">delete</span>
        </button>
    )
}

function PreviousPageBtn() {
    return (
        <Link to={'/'} className="btn-back">
            <span className="a11y-hidden">Back</span>
        </Link>
    )
}

export {Profile, WriteBtn, LogoutBtn, LoginBtn, RegisterBtn, LikeBtn, PostModifyBtn, PostDeleteBtn, PreviousPageBtn}