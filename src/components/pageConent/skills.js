import React from "react";

import Css from "../../images/css-5.svg";
import Dioc from "../../images/digitalocean-logo.svg";
import Datagrip from "../../images/DataGrip.png";
import Django from "../../images/django.svg";
import Azure from "../../images/Azure.svg";
import Figma from "../../images/Figma.svg";
import Flutter from "../../images/flutter.svg";
import Gatsby from "../../images/gatsby.png";
import Gitlab from "../../images/Gitlab.png";
import Linux from "../../images/linux.svg";
import Mysql from "../../images/mysql.svg";
import nginx from "../../images/nginx.svg";
import Nodejs from "../../images/nodejs.svg";
import Postman from "../../images/postman.svg";
import Powershell from "../../images/powershell.png";
import Python from "../../images/python.svg";
import react from "../../images/react.svg";
import JS from "../../images/javascript.svg";
import Github from "../../images/github.svg";
import Metasploit from "../../images/metasploit.png";
import Arduino from "../../images/Arduino.svg.png"

import "../../styles/skills.css"
import "../../styles/layout.css"

const skills = () => (
	<section id="skills" className="skills">
		<h3 className="page-heading">Skills</h3>
		<div className="skills-center">
			<div className="development">
				<div className="icon-row">
					<img src={ Css } alt="CSS"/>
					<img src={ Dioc } alt="DigitalOcean"/>
					<img src={ Datagrip } alt="Datagrip"/>
					<img src={ Django } alt="Django"/>
					<img src={ Azure } alt="Azure"/>
					<img src={ Mysql } alt="Mysql"/>
					<img src={ Figma } alt="Django"/>
					
				</div>
				<div className="icon-row">
					<img src={ Flutter } alt="Flutter"/>
					<img src={ Gatsby } alt="Gatsby"/>
					<img src={ Gitlab } alt="Gitlab"/>
					<img src={ Github } alt="Github"/>
					<img src={ Linux } alt="Linux"/>
					<img src={ Metasploit } alt="Metasploit"/>
					<img src={ nginx } alt="nginx"/>
				</div>
				<div className="icon-row">
					<img src={ Nodejs } alt="Nodejs"/>
					<img src={ Postman } alt="Postman"/>
					<img src={ Powershell } alt="Powershell"/>
					<img src={ Python } alt="Python"/>
					<img src={ react } alt="react"/>
					<img src={ JS } alt="JavaScript"/>
					<img src={ Arduino } alt="Arduino"/>
				</div>
				
			</div>
		</div>
		
	</section>
)

export default skills