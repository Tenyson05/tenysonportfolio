import React from "react"

import "../styles/footer.css"
import Github from  "../components/icon/github"
import Twitter from "../components/icon/twitter"
import LinkedIn from "../components/icon/linkedin"

const footer = () => (
	<footer className="pagefooter">
		<div className="footer-icons">
			<ul className="footer-icon-list">
			</ul>	
		</div>
		<div className="inspire">
			{/* <a href="https://brittanychiang.com/" className="inspire-links">
				<div>Inspired by BrittanyChiang.com</div>
			</a> */}
			{/* <br /> */}
			<a href="https://www.flaticon.com/" className="inspire-links">
				<div className="bottom-inspire">Icons taken from flaticon.com</div>
			</a>
		</div>

	</footer>
)

export default footer;
