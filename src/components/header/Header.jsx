import React, { useState } from 'react'

import { Profile, WriteBtn, LogoutBtn, LoginBtn, RegisterBtn } from "../buttons/Buttons";

import "./header.css"

import Logo from '../../assets/Logo.svg'

export default function Header() {
	const [login, setLogin] = useState(false);
	const handleClickLogin = () => setLogin((curr) => !curr);

	return (
		<header>
				<div className="max-width">
					<h1>
						<a href="/">
							<img src={Logo} alt="My Blog" />
						</a>
					</h1>
					<ul>
						{login ? 
							<>
								<Profile />
								<WriteBtn />
								<LogoutBtn onClick={handleClickLogin} /> 
							</>
							: 
							<>
							<LoginBtn onClick={handleClickLogin}/>
							<RegisterBtn onClick={handleClickLogin}/>
							</>
						}
					</ul>
				</div>
			</header>
	)
	}