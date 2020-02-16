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
import Github from "./icon/github"
import LinkedIn from "./icon/linkedin"
import Twitter from "./icon/twitter"

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
								<Github />
							</a>
						</li>
						<li>
							<a className="list-icon" href="https://twitter.com/Tenyson05_" target="_blank" rel="nofollow nooperner noreferrer" >
								<Twitter />
							</a>
						</li>
						<li>
							<a  href="https://www.linkedin.com/in/rojah-lewis-9652ab15b/" target="_blank" className="list-icon" rel="nofollow nooperner noreferrer" >
								<LinkedIn />
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
