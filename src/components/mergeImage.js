import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Container from '@material-ui/core/Container'

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(filter: {original: {src: {regex: "/merge/"}}}) {
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
  return(
    <Container maxWidth="xs">
      <Img fluid={data.allImageSharp.edges[0].node.fluid} />
    </Container>
    
  )
}