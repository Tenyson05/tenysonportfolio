// import { Link } from "gatsby"
import React from "react"
import "../styles/layout.css"

import Game from "../images/tower-pc.png"
import Button from "../components/button"
import $ from "jQuery"
import IconLogo from "./icon/tenyson"


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".main-header").addClass("main-header-alt");
    } else {
        $(".main-header").removeClass("main-header-alt");
    }
});



// window.addEventListener("scroll", scrollView(), false);

const Header = () => (
  <header className="main-header">
	  <nav className="navbar">

		<div className="nav-left-section">
			<a href=".">
				{/* <img style = {{ height: "50px", width: "50px", padding: "12px" }} src={ Game }/> */}
				<IconLogo />
			</a>
		</div>
		
		<div className="nav-right-section">
			<ol className="header-list">
				<li className="header-text">
					<a href="/#about">About</a>
				</li>
				<li className="header-text">
					<a href="/#skills">Skills</a>
				</li>
				<li className="header-text">
					<a href="/#work">Work</a>
				</li>
			</ol>
			<div>
				<a href="https://www.twitch.tv/pwnstarzdotcom">
				<Button 
					size="0.6em 2em"
					go="/home"
					label="Resume"
				/>
				</a>
				
			</div>
			
		</div>
	  </nav>

  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
