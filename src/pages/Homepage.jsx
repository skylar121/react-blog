import React from "react";
import "../css/reset.css"
import "../css/global.css"

import Header from '../components/header/Header';
import {Banner} from '../components/banner/Banner';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';


function Homepage() {
	return (
		<>
                <Header />
                <Banner />
                <Main />
                <Footer />                
		</>
	);
}

export default Homepage;
