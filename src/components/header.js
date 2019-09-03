import PropTypes from "prop-types"
import React from "react"

import logo from '../images/logo.png'
import GatsbyLink from './link'

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1
  },
  title: {
    marginLeft: theme.spacing(1)
  },
  buttonInstall: {
    marginLeft: theme.spacing(1)
  }
}))


const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <GatsbyLink className={classes.link} to="/" color="secondary">
              <Avatar className={classes.avatar} src={logo} alt="logo" />
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
