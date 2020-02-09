import React from "react";
import { FaPython } from "react-icons/fa"
import { DiDjango } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { FaDigitalOcean } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { DiMysql } from "react-icons/di"
import { FaCss3 } from "react-icons/fa"
import { DiUnitySmall } from "react-icons/di"

// import from "react"

const skills = () => (
	<section className="skills">
		<h1 className="page-heading">Skills</h1>
		<div className="skills-center">
			<div className="development">
				<h1>Development </h1>
				<div className="icon-row">
					<h3><FaPython /></h3>
					<h3><DiDjango /></h3>
					<h3><IoLogoJavascript /></h3>
				</div>
				<div className="icon-row">
					<h3><FaDigitalOcean /></h3>
					<h3><FaNodeJs /></h3>
					<h3><FaReact /></h3>
				</div>
				<div className="icon-row">
					<h3><DiMysql /></h3>
					<h3><FaCss3 /></h3>
					<h3><DiUnitySmall /></h3>
				</div>
				
			</div>
			<div className="Tools">
				<h1>Tools</h1>
				<ul>
					<li>Github</li>
					<li>Gitlab</li>
					<li>Windows & Linux CLI</li>
					<li>Postman</li>
					<li>Nginx</li>
					<li>Azure</li>
					<li>Datagrip</li>
					<li>Figma</li>
				</ul>
			</div>
		</div>
		
	</section>
)

export default skills