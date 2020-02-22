import React from "react"

import "../styles/hamburger.css"

import Button from "./button"

const sideBar = props => {
	let sidebarMenu = "sidebar-menu"
	if(props.show) {
		sidebarMenu = "sidebar-menu open";
	}
	return (
		<div className={sidebarMenu}>
			<aside className="side-menu">
				<nav className="side-nav">
					<ol className="side-list">
						<li className="side-list-item">
							<a href="/#about" >About</a>
						</li>
						<li className="side-list-item">
							<a href="/#skills">Skills</a>
						</li>
						<li className="side-list-item">
							<a href="/#work">Work</a>
						</li>
					</ol>
					<a href=".">
						<Button
							size="2em 3em"
							label="Resume"
						/>
					</a>
				</nav>
			</aside>
		</div>
	)

	}

export default sideBar;
