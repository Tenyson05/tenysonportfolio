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
				Lorem ipsum dolor sit amet, consectetur Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.
			</p>
		</div>
		<div>
		<Button 
			size="0.9em 2.5em"
			go="/home"
			label="Resume"
		/>
		</div>
		
	</section>
	
)

export default homePage;