import React from "react";

import "../../styles/layout.css"
import teny from "../../images/teny.jpg"


const about = () => (
	<section className="about">
		<h1 className="page-heading">About</h1>
		<div className="about-info">
			<p>
				consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.
			</p>
			<div className="about-img">
				<picture className="about-picture">
					<img src={ teny } alt="Tenyson"/>
					{/* <source type="image" media="(min-width: 50px) 10vh 20px" srcset={ teny }></source>
					<img src={ teny } alt="Tenyson"/> */}
				</picture>
			</div>

		</div>
	</section>
)

export default about;