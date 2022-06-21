import React from 'react'
// import "../../css/global.css"
import "./buttons.css"

import profileImg from '../../assets/profile.jpg'
import iconModifyWhite from '../../assets/icon-modify-white.svg'
import iconLogOut from '../../assets/icon-logout.svg'
import iconLogin from '../../assets/icon-login.svg'
import iconRegister from '../../assets/icon-register.svg'


function Profile() {
    return (
        <li className="profile-img">
            <a href="#">
                <img src={profileImg} alt="My Page" />
            </a>
        </li>
    )
}

function WriteBtn() {
    return (
        <li>
            <a href="#" className="button">
                <img src={iconModifyWhite} alt="" />
                <span>Write</span>
            </a>
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
            <a href="#" className="button gray">
                <img src={iconLogin} alt="" />
                <span>Login</span>
            </a>
        </li>
    )
}

function RegisterBtn({onClick}) {
    return (
        <li className="only-pc" onClick={onClick}>
            <a href="#" className="button gray">
                <img src={iconRegister} alt="" />
                <span>Register</span>
            </a>
        </li>
    )
}

function LikeBtn(){
    return (
        <button className="btn-like">
            Like
        </button>
    )
}

export {Profile, WriteBtn, LogoutBtn, LoginBtn, RegisterBtn, LikeBtn}