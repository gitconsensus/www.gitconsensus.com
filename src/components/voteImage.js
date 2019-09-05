import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Container from '@material-ui/core/Container'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {regex: "/votes/"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container maxWidth="xs">
      <Img fluid={data.file.childImageSharp.fluid} alt="Shows vote totals, vote breakdown and vote results for a sample project" />
    </Container>
  )
}