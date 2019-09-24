import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewForm from '../components/newForm'

import govs from '../data/configOptions.json'

const FormPage = () => (
  <Layout>
    <SEO title="Config Builder" />
    <NewForm govs={govs} />
  </Layout>
)

export default FormPage
