// import { Link } from "gatsby"
import React from "react"
import "../styles/layout.css"

import Game from "../images/tower-pc.png"
import Button from "../components/button"
import $ from "jQuery"


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
			<img style = {{ height: "50px", width: "50px", padding: "12px" }} src={ Game }/>
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
				<li className="header-text">
					<a href="/#contact">Contact</a>
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
