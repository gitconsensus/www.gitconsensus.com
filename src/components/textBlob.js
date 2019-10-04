import React from 'react'

import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'

import Button from '@material-ui/core/button'

const TextBlob = ({ config }) => {

 

  const codeString = `
# Which version of the consensus rules to use
version: 3

# Add extra labels for the vote counts and age when merging
extra_labels: ${config.extra_labels}

# Don't count any vote from a user who votes for multiple options
prevent_doubles: ${config.prevent_doubles}

pull_requests:

  # At least three people should sign off on any pull request.
  quorum: ${config.quorum}

  # Required percentage of "yes" votes (ignoring abstentions). It's a good idea to give "no" votes more power.
  threshold: ${config.threshold}

  # Number of hours after last action (commit or opening the pull request) before issue can be merged
  merge_delay: ${config.merge_delay}

  # Number of votes at which the merge_delay gets ignored, assuming no negative votes.
  delay_override: ${config.delay_override}

  # Close pull requests that don't pass after seven days without any activity (new commits).
  timeout: ${config.timeout}

  # Do not allow changes to the license.
  license_lock: ${config.license_lock}

  # Allow the consensus rules (this file) to be changed.
  consensus_lock: ${config.consensus_lock}

  # Wait for at least four days before merging any new consensus rules.
  consensus_delay: ${config.consensus_delay}

  # Allow anyone to vote on this project, even if they've never contributed.
  contributors_only: ${config.contributors_only}

  # Don't put any restrictions on who can vote.
  collaborators_only: ${config.collaborators_only}
    `
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <CopyToClipboard text={codeString}>
        <Button style={{ marginRight: "auto", marginLeft: "auto" }} variant="outlined">Copy to Clipboard</Button>
      </CopyToClipboard>
      <SyntaxHighlighter
        customStyle={{
          padding: 20,
          fontSize: 16
        }}
        language="yaml">
        
        {codeString}
      </SyntaxHighlighter>
    </div>
    
  )
}

export default TextBlob
