import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import GatsbyLink from './link'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    flexGrow: 1
  },
  title: {
    marginLeft: theme.spacing(1)
  },
  buttonInstall: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    padding: theme.spacing(2.2)
  }
}))


const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {regex: "/logo/"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            
            <GatsbyLink className={classes.link} to="/" color="secondary">
              <Img className={classes.avatar} fluid={data.file.childImageSharp.fluid} alt="logo" />
              <Typography variant="h6" className={classes.title}>{siteTitle}</Typography>
            </GatsbyLink>
            <Button
              component="button"
              variant="outlined"
              href="/configBuilder"
              color="secondary"
            >
              Config Builder
              </Button>
            <Button
              component="button"
              variant="outlined"
              href="https://github.com/apps/gitconsensus"
              color="secondary"
              className={classes.buttonInstall}
              >
                Install On GitHub
              </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``
}

export default Header
