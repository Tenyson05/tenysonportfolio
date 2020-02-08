import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/pageConent/homepage"
import About from "../components/pageConent/about"

// import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Tenyson" />
	<Homepage />
	<About />
  </Layout>
)

export default IndexPage
