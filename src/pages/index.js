import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/pageConent/homepage"
import About from "../components/pageConent/about"
import Skills from "../components/pageConent/skills"
import Work from "../components/pageConent/work"
import SideBar from "../components/hamburger"

// import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Tenyson" />
	<Homepage />
	{/* <SideBar /> */}
	<About />
	<Skills />
	<Work />
  </Layout>
)

export default IndexPage
