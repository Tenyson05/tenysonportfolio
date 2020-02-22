import React from "react";

import "../../styles/about.css"
import teny from "../../images/me.jpg"


const about = () => (
	<section id="about" className="about">
		<h3 className="page-heading">About</h3>
		<div className="about-info">
			<p>
			A final year university student studying computer science at the
			University of Technology, Jamaica and an aspiring cyber security analytic. I enjoy the bridge between being 
			a developer and cyber security enthusiast which allows me to develop apps/software and websites while keeping
			them secure or defending myself against cyber threat. I Hope to extend my cyber skills to companies in the future.
			In my spear time I love to learn about technology, learn how they work and how they are made as well as play video games or watch anime.
			My ultimate goal is to become a game developer, develop a virtual world that allows the player to be in total control as well as to operate my
			own startup company.

			</p>
			<div className="about-img">
				<a href="https://google.com" className="img-link">
					<div className="sub-about-img">
					<div style={{width: "100%", paddingBottom: "100%"}}></div>
					<picture>
						<source type="image" srcset={ teny }></source>
						<img className="avatar" src={ teny } />
					</picture>
					</div>	
				</a>
			</div>
		</div>
	</section>
)

export default about;