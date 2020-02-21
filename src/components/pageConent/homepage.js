import React from "react"

import "../../styles/homepage.css"
import Button from "../button"

const homePage = () => (
	<section id="home" className="homepage">
		<h1 className="homepage-greet">Hi, my name is,</h1 >
		<h2 className="homepage-name">Rojah Lewis.</h2 >
		<h3 className="homepage-desc">Developer, Tech & Cyber Security enthusiast</h3>
		
		<div  className="desc">
			<p>
				I'm a software developer and a Technology and Cyber security enthusiast. I enjoy making websites, 
				apps and software as well as learning about technology and Cyber security.
			</p>
		</div>
		<div className="homepage-button"> 
			<a href="mailto:rojahog@hotmail.com">
				<Button 
				size="2em 3em"
				label="Get In Touch "
				/>
			</a>
		
		</div>
		
	</section>
	
)

export default homePage;