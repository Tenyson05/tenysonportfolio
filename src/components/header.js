// import { Link } from "gatsby"
import React, { Component } from "react"
import "../styles/layout.css"

import Button from "../components/button"
import IconLogo from "./icon/tenyson"
import HamToggle from "./hamtoggle"
import SideBar from "./hamburger"
import Pdf from './resume.pdf'


var $ = require("jquery");

class Header extends Component {

	componentDidMount() {
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 200) {
				$(".main-header").addClass("main-header-alt");
			} else {
				$(".main-header").removeClass("main-header-alt");
			}
		});
	}

	state = {
		sideDrawOpen: false
	};

	hamToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawOpen: !prevState.sideDrawOpen};
		});
	};
	render() {	
		return (
			<header className="main-header">
				<nav className="navbar">

					<div className="nav-left-section">
						<a href=".">
							<IconLogo />
						</a>
					</div>

					<HamToggle sidebarclicker={this.hamToggleClickHandler}/>
					
					<div className="nav-right-section">
						<ol className="header-list">
							<li className="header-text">
								<a href="/#about" >About</a>
							</li>
							<li className="header-text">
								<a href="/#skills">Skills</a>
							</li>
							<li className="header-text">
								<a href="/#work">Work</a>
							</li>
						</ol>
						<div>
							<a href={ Pdf } rel="nofollow nooperner noreferrer" target="_blank">
								<Button
									size="0.6em 2em"
									go="/home"
									label="Resume"
								/>
							</a>

						</div>
					</div>
				</nav>
				<SideBar show={this.state.sideDrawOpen}/>
			</header>
		)
	}
} 

export default Header;
