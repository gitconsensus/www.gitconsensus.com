import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

import 'typeface-roboto'

const IndexPage = () => (
  <Layout>
    <SEO title="Automate Open Source Software Management" description="Automate Open Source Software Management" />
    <Content />
  </Layout>
)

export default IndexPage
