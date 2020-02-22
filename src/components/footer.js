import React from "react"

import "../styles/footer.css"
import Github from  "../components/icon/github"
import Twitter from "../components/icon/twitter"
import LinkedIn from "../components/icon/linkedin"

const footer = () => (
	<footer className="pagefooter">
		<div className="footer-icons">
			<ul className="footer-icon-list">
				<li>
					<a className="icons" href="https://github.com/Tenyson05"  target="_blank" rel="nofollow nooperner noreferrer" >
						<Github />
					</a>
				</li>
				<li>
					<a className="icons" href="https://twitter.com/Tenyson05_" target="_blank" rel="nofollow nooperner noreferrer" >
						<Twitter />
					</a>
				</li>
				<li>
					<a className="icons" href="https://www.linkedin.com/in/rojah-lewis-9652ab15b/" target="_blank" rel="nofollow nooperner noreferrer" >
						<LinkedIn />
					</a>
				</li>
			</ul>	
		</div>
		<div className="inspire">
			<a href="https://brittanychiang.com/" className="inspire-links">
				<div>Inspired by BrittanyChiang.com</div>
			</a>
			<br />
			<a href="https://www.flaticon.com/" className="inspire-links">
				<div className="bottom-inspire">Icons taken from flaticon.com</div>
			</a>
		</div>

	</footer>
)

export default footer;