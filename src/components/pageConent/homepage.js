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
				Lorem ipsum dolor sit amet, consectetur Curabitur egestas vehiras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.
			</p>
		</div>
		<div>
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