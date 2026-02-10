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
import Footer from "./footer"
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
						</li>
						<li>
						</li>
						<li>

						</li>
					</ul>
				</div>
				<div className="side-section">
					<div className="side-email">
					</div>
				</div>
				<div id="content">
					<main className="main fillHeight">{children}</main>
					<Footer />
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
