import { Link } from "gatsby"
import React from "react"
import "../styles/layout.css"

import Game from "../images/tower-pc.png"
import Button from "../components/button"

// import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => (
  <header>
    <div className="header-layout">
		<div className="nav-left-section">
			<img style = {{ height: "50px", width: "50px", padding: "12px" }} src={ Game }/>
		</div>
		
		<div className="nav-right-section">
			<p id="header-text">01. <a href="/#about">About</a></p>
			<p id="header-text">02. <a href="/">Skills</a></p>
			<p id="header-text">03. <a href="/">Work</a></p>
			<p id="header-text">04. <a href="/">Contact</a></p>
			<Button 
				size="0.6em 2em"
				go="/homeeee"
				label="Resume"
			/>
		</div>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
