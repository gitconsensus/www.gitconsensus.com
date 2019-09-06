import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Container from '@material-ui/core/Container'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {regex: "/merge/"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Container maxWidth="xs">
      <Img fluid={data.file.childImageSharp.fluid} />
    </Container>
    
  )
}