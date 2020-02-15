/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/main.css"
import Github from "../images/github.svg"
import Twitter from "../images/twitter.png"
import Linkedin from "../images/linkedin.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
	<div id="root">
		<div className="main-window">
				<Header />
				<div className="side-links">
					<ul className="social-links">
						<li>
							<a className="list-icon" href="https://github.com/Tenyson05" target="_blank" rel="nofollow nooperner noreferrer" >
								<img src={ Github } alt="Github" title="Github"/>
							</a>
						</li>
						<li>
							<a className="list-icon" href="https://twitter.com/Tenyson05_" target="_blank" rel="nofollow nooperner noreferrer" >
								<img src={ Twitter } alt="Twitter" title="Twitter"/> 
							</a>
						</li>
						<li>
							<a  href="https://www.linkedin.com/in/rojah-lewis-9652ab15b/" target="_blank" className="list-icon" rel="nofollow nooperner noreferrer" >
								<img src={ Linkedin } alt="Linkedin" title="Linkedin"/>
							</a>
						</li>
					</ul>
				</div>
				<div id="content">
					<main className="main fillHeight">{children}</main>
				</div>
				
			</div>
	</div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
