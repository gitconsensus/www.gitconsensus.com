import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Container from '@material-ui/core/Container'

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      allImageSharp(filter: {original: {src: {regex: "/votes/"}}}) {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <Container maxWidth="xs">
      <Img fluid={data.allImageSharp.edges[0].node.fluid} />
    </Container>
  )
}