import React from "react";

import Css from "../../images/css-5.svg";
import Dioc from "../../images/digitalocean-logo.svg";
import Datagrip from "../../images/DataGrip.png";
import Django from "../../images/django.svg";
import Azure from "../../images/Azure.svg";
import Figma from "../../images/Figma.svg";
import Flutter from "../../images/flutter.svg";
import Gatsby from "../../images/gatsby.png";
import Gitlab from "../../images/GitLab.png";
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
		<h3 className="page-heading">Skills &#38; Tools</h3>
		<div className="skills-center">
			<div className="tools">
				<div className="icon-row">
					<img src={ Css } alt="CSS" title="CSS"/>
					<img src={ Dioc } alt="DigitalOcean" title="Digital Ocean"/>
					<img src={ Datagrip } alt="Datagrip" title="Datagrip" />
					<img src={ Django } alt="Django" title="Django"/>
					<img src={ Azure } alt="Azure" title="Azure"/>
					<img src={ Mysql } alt="Mysql" title="MySQL"/>
					<img src={ Figma } alt="Figma" title="Figma"/>
					<img src={ Flutter } alt="Flutter" title="Flutter"/>
					<img src={ Gatsby } alt="Gatsby" title="Gatsby"/>
					<img src={ Gitlab } alt="Gitlab" title="GitLab"/>
					<img src={ Github } alt="Github" title="Github"/>
					<img src={ Linux } alt="Linux" title="Linux"/>
					<img src={ Metasploit } alt="Metasploit" title="Metasploit"/>
					<img src={ nginx } alt="nginx" title="Nginx"/>
					<img src={ Nodejs } alt="Nodejs" title="Nodejs"/>
					<img src={ Postman } alt="Postman" title="Postman"/>
					<img src={ Powershell } alt="Powershell" title="Powershell"/>
					<img src={ Python } alt="Python" title="Python"/>
					<img src={ react } alt="react" title="React"/>
					<img src={ JS } alt="JavaScript" title="JavaScript"/>
					<img src={ Arduino } alt="Arduino" title="Arduino"/>
				</div>				
			</div>
		</div>
		
	</section>
)
export default skills