// import { Link } from "gatsby"
import React, { Component } from "react"
import "../styles/layout.css"

// import Game from "../images/tower-pc.png"
import Button from "../components/button"
// import $ from "jQuery"
import IconLogo from "./icon/tenyson"
import HamToggle from "./hamtoggle"
import SideBar from "./hamburger"


var $ = require("jquery");


// const window = typeof window !== `undefined` ? require("module") : null

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

	// drawerCloser = () => {
	// 	this.setState({sideDrawOpen: false});
	// }

	render() {
		// let sideDrawer;
		// if (this.state.sideDrawOpen) {
		// 	sideDrawer = <SideBar />
		// } 	
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
							<a href="https://www.twitch.tv/pwnstarzdotcom" rel="nofollow nooperner noreferrer" target="_blank">
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
  

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
