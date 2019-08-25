import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

import 'typeface-roboto'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content />
  </Layout>
)

export default IndexPage
