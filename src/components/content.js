import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'


//import MergeImage from './mergeImage'
import VoteImage from './voteImage'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(12)
  },
  title: {
    marginBottom: theme.spacing(4)
  }
}))

const Content = () => {
  const classes = useStyles()
    return (
      <Container maxWidth="md" className={classes.root}>
        <Typography className={classes.title} variant="h4" align="center">Getting Started</Typography>
        
        <Typography gutterBottom variant="body1">GitConsensus makes it possible to automate project governance on GitHub by using “reactions” as a voting mechanism to automatically merge (or close) pull requests.</Typography>
        {/* <MergeImage /> */}

        <Typography variant="h5" gutterBottom>Installation</Typography>
        <Typography variant="body1" gutterBottom>On the <a href="https://github.com/gitconsensus/">GitConsensusApp Page on Github</a> find the Configure button to start. From there you can select where to install it to.</Typography>
        <Typography variant="body1" gutterBottom>Once installed each repository which should be managed by GitConsensus needs a .gitconsensus.yaml file to define the consensus rules used by the project. Repositories without this file will simply be ignored. A variety of <a href="https://github.com/gitconsensus/gitconsensus_examples">example files</a> exist to help get started, and these <a href="https://github.com/gitconsensus/gitconsensus_examples/blob/master/examples/recommended/.gitconsensus.yaml">recommended consensus</a> rules should be a great starting point for most projects.</Typography>
        <Typography variant="h5" gutterBottom>Voting</Typography>
        <Typography variant="body1" gutterBottom>Votes are made by using reactions on the top level comment of the Pull Request.</Typography>
        <VoteImage />
        <Typography variant="body1" gutterBottom>An Abstain vote counts when calculating quorum but is discarded when checking to see if the vote passed.</Typography>
        <Typography variant="body1" gutterBottom>Voting for more than one option can be disabled on a per project basis.</Typography>
        <Typography variant="h5" gutterBottom>Label Overrides</Typography>
        <Typography variant="body1" gutterBottom>Any pull request with a WIP or DONTMERGE label (case insensitive) will be skipped over.</Typography>
      </Container>
    )
}

export default Content

