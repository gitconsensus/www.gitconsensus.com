import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleDoubles = this.handleToggle.bind(this, 'preventDoubles')
    this.handleLabels = this.handleToggle.bind(this, 'extraLabels')
    this.handleLicense = this.handleToggle.bind(this, 'licenseLock')
    this.handleConsensus = this.handleToggle.bind(this, 'consensusLock')
    this.handleContributors = this.handleToggle.bind(this, 'contributorsOnly')
    this.handleCollaborators = this.handleToggle.bind(this, 'collaboratorsOnly')

    this.state = {
      extraLabels: false,
      preventDoubles: true,
      quorum: 3,
      threshold: 0.74,
      mergeDelay: 12,
      delayOverride: 6,
      timeout: 168,
      licenseLock: true,
      consensusLock: false,
      consensusDelay: 96,
      contributorsOnly: false,
      collaboratorsOnly: false,
      template: "recommended",
      copied: false
    }
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.id
    this.setState({ [name]: value })
  }

  handleToggle = (key, event) => {
    this.setState({ [key]: event.target.checked })
  }

  handleCopy = () => {
    this.setState({ copied: true });
  };

  

  render() {
    const codeString = `
# Which version of the consensus rules to use
version: 3

# Add extra labels for the vote counts and age when merging
extra_labels: ${this.state.extraLabels}

# Don't count any vote from a user who votes for multiple options
prevent_doubles: ${this.state.preventDoubles}

pull_requests:

  # At least three people should sign off on any pull request.
  quorum: ${this.state.quorum}

  # Required percentage of "yes" votes (ignoring abstentions). It's a good idea to give "no" votes more power.
  threshold: ${this.state.threshold}

  # Number of hours after last action (commit or opening the pull request) before issue can be merged
  merge_delay: ${this.state.mergeDelay}

  # Number of votes at which the merge_delay gets ignored, assuming no negative votes.
  delay_override: ${this.state.delayOverride}

  # Close pull requests that don't pass after seven days without any activity (new commits).
  timeout: ${this.state.timeout}

  # Do not allow changes to the license.
  license_lock: ${this.state.licenseLock}

  # Allow the consensus rules (this file) to be changed.
  consensus_lock: ${this.state.consensusLock}

  # Wait for at least four days before merging any new consensus rules.
  consensus_delay: ${this.state.consensusDelay}

  # Allow anyone to vote on this project, even if they've never contributed.
  contributors_only: ${this.state.contributorsOnly}

  # Don't put any restrictions on who can vote.
  collaborators_only: ${this.state.collaboratorsOnly}
    `

    return (
      <>
        <form style={{ display: "flex", flexDirection: "column", marginTop: 100, marginBottom: 30}} noValidate autoComplete="off">
          <FormControl component="fieldset">
            <FormLabel component="legend">Basic Info</FormLabel>
            <FormGroup row style={{ marginBottom: 10 }}>
              <Tooltip title="Add extra labels for the vote counts and age when merging" placement="top">
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.extraLabels}
                      onChange={this.handleLabels}
                      value="extraLabels"
                      inputProps={{ 'aria-label': 'Extra Labels' }}
                    />
                  }
                  label="Extra Labels"
                />
              </Tooltip>
              <Tooltip title="Don't count any vote from a user who votes for multiple options" placement="top">
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.preventDoubles}
                      onChange={this.handleDoubles}
                      value="preventDoubles"
                      inputProps={{ 'aria-label': 'Prevent Doubles' }}
                    />
                  }
                  label="Prevent Doubles"
                />
              </Tooltip>
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Pull Requests</FormLabel>
            <FormGroup row style={{ marginBottom: 10 }}>
              <Tooltip title="Minimum number of voters" placement="top">
                <TextField
                  id="quorum"
                  label="Quorum"
                  className=''
                  value={this.state.quorum}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{
                    marginRight: 10
                  }}
                />
              </Tooltip>
              <Tooltip title="Required percentage of 'yes' votes (ignoring abstentions)" placement="top">
                <TextField
                  id="threshold"
                  label="Threshold"
                  className=''
                  value={this.state.threshold}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{
                    marginRight: 10
                  }}
                />
              </Tooltip>
              <Tooltip title="Number of hours after last action (commit or opening the pull request) before issue can be merged" placement="top">
                <TextField
                  id="mergeDelay"
                  label="Merge Delay"
                  className=''
                  value={this.state.mergeDelay}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{
                    marginRight: 10
                  }}
                />
              </Tooltip>
              <Tooltip title="Number of votes at which the merge_delay gets ignored, assuming no negative votes." placement="top">
                <TextField
                  id="delayOverride"
                  label="Delay Override"
                  className=''
                  value={this.state.delayOverride}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{
                    marginRight: 10
                  }}
                />
              </Tooltip>
              <Tooltip title="Close pull requests that don't pass after seven days without any activity (new commits)." placement="top">
                <TextField
                  id="timeout"
                  label="Timeout"
                  className=''
                  value={this.state.timeout}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{
                    marginRight: 10
                  }}
                />
              </Tooltip>
              <Tooltip title="Time to wait (in hours) before merging any new consensus rules." placement="top">
                <TextField
                  id="consensusDelay"
                  label="Consensus Delay"
                  className=''
                  value={this.state.consensusDelay}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{
                    marginRight: 10
                  }}
                />
              </Tooltip>
              
            </FormGroup>
            <FormGroup row>
              <Tooltip title="Allow changes to the license" placement="top">
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.licenseLock}
                      onChange={this.handleLicense}
                      value="licenseLock"
                      inputProps={{ 'aria-label': 'License Lock' }}
                    />
                  }
                  label="License Lock"
                />
              </Tooltip>
              <Tooltip title="Allow the consensus rules (this file) to be changed" placement="top">
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.consensusLock}
                      onChange={this.handleConsensus}
                      value="consensusLock"
                      inputProps={{ 'aria-label': 'Consensus Lock' }}
                    />
                  }
                  label="Consensus Lock"
                />
              </Tooltip>
              <Tooltip title="Allow anyone to vote on this project, even if they've never contributed" placement="top">
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.contributorsOnly}
                      onChange={this.handleContributors}
                      value="contributorsOnly"
                      inputProps={{ 'aria-label': 'Contributors Only' }}
                    />
                  }
                  label="Contributors Only"
                />
              </Tooltip>
              <Tooltip title="Put restrictions on who can vote" placement="top">
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.collaboratorsOnly}
                      onChange={this.handleCollaborators}
                      value="collaboratorsOnly"
                      inputProps={{ 'aria-label': 'Collaborators Only' }}
                    />
                  }
                  label="Collaborators Only"
                />
              </Tooltip>
              
              
            </FormGroup>
            
          </FormControl>
          <CopyToClipboard onCopy={this.handleCopy} text={codeString}>
            <Button style={{ marginTop: 30, marginRight: "auto", marginLeft: "auto" }} variant="outlined">Copy to Clipboard</Button>
          </CopyToClipboard>
        </form>
        
        <SyntaxHighlighter 
          customStyle={{
            padding: 20,
            fontSize: 16
          }}
          language="yaml">
          {codeString}
        </SyntaxHighlighter>
      </>
    )
  }
}

export default Form