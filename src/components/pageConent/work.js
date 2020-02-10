import React from "react"

import Github from "../../images/github.svg"

const work = () => (
	 <section className="work">
		 <h1 className="page-heading"> Work</h1>
		 <div className="work-home">
			 <div className="project-cards">
				<header>
					<div className="card-heading">
						<a href="www.github.com/tenyson05">
							<img src= { Github } alt="Github"/>
						</a>
					</div>
					<div className="card-info">
						<h1>Project</h1>
						<p>consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis,</p>

					</div>
				</header>
				<footer>
					<div className="foot-info">
						<p>Nodejs</p>
						<p>Express</p>
						<p>DigitalOcean</p>
					</div>
				</footer>
			 </div>
			 <div className="project-cards">
				<header>
					<div className="card-heading">
						<a href="www.github.com/tenyson05">
							<img src= { Github } alt="Github"/>
						</a>
					</div>
					<div className="card-info">
						<h1>Project</h1>
						<p>consectetur adipiscing elit. Cras ultricies ultricies turpis, a posuere nisi ullamcorper id. Curabitur egestas vehicula nibh non tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultricies turpis,</p>

					</div>
				</header>
				<footer>
					<div className="foot-info">
						<p>Nodejs</p>
						<p>Express</p>
						<p>DigitalOcean</p>
					</div>
				</footer>
			 </div>
			 
			
		 </div>

	 </section>
)


export default work;