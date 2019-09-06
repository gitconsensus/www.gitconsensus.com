import React from 'react'
import MuiLink from '@material-ui/core/Link'
import { Link as GatsbyLink } from 'gatsby'

const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink underline="none" component={GatsbyLink} ref={ref} {...props} />
})

export default Link