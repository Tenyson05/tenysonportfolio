import React from "react";

import "../../styles/about.css"
import teny from "../../images/me.jpg"


const about = () => (
	<section id="about" className="about">
		<h3 className="page-heading">About</h3>
		<div className="about-info">
			<p>
			Final year university student studying computer science at the University Of Technology, Jamaica and an aspiring 
			cybersecurity analyst/engineer. I enjoy being a developer and a cybersecurity enthusiast which allows me to build
			applications, software or websites with the added benefit of keeping them secure and safe from vulnerabilities 
			and threats. During my spare time, I enjoy coding, watching anime and playing videos. My final goal is to become 
			a game developer and develop a virtual world that grants users total control over their environment.
			</p>
			<div className="about-img">
				<a href="https://github.com/Tenyson05" className="img-link">
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
