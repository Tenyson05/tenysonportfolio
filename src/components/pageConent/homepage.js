import React from "react"

import Button from "../button"
import "../../styles/layout.css"

const homePage = () => (
	<div className="homepage">
		<p id="welcome">Hi my name is,</p>
		<p id="name">Rojah Lewis</p>
		<p id="title">Developer, Cyber Security enthusiast</p>
		<p id="description">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.
		</p>
		{/* <a href="www.google.com"> */}
			<Button
				home="/about"
				size="1.5em 4em"
				label="Get in touch"
			/>
		{/* </a> */}
		
	</div>
)

export default homePage;