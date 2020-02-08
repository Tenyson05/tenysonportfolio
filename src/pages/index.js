import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/pageConent/homepage"

// import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Tenyson" />
	<Homepage />
  </Layout>
)

export default IndexPage
