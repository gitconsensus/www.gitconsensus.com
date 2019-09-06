/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from '@material-ui/styles'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import myTheme from '../theme'
import { makeStyles } from '@material-ui/core/styles'

import Header from "./header"

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: theme.spacing(2)
  },
  main: {
    paddingBottom: theme.spacing(2)
  }
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
        <Container maxWidth="md">
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>
            <Typography variant="body1" gutterBottom>
              © {new Date().getFullYear()} <a href="https://projects.tedivm.com">Robert Hafner</a>
            </Typography>
            <Typography variant="body1" gutterBottom>Homepage built with
                {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://www.alilynne.com">AliLynne</a>.</Typography>
          </footer>
        </Container>
      </ThemeProvider>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
