import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'


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

  handleTemplate = (e) => {
    console.log(e.target.value)
    switch(e.target.value) {
      case "anarchy":
        this.setState({
          version: 3,
          extraLabels: false,
          preventDoubles: false,
          quorum: 1,
          threshold: 0.01,
          mergeDelay: 1,
          delayOverride: false,
          timeout: 168,
          licenseLock: true,
          consensusLock: false,
          consensusDelay: 1,
          contributorsOnly: false,
          collaboratorsOnly: false,
          template: "anarchy"
        })
        break
      case "autocracy":
        this.setState({
          version: 3,
          extraLabels: false,
          preventDoubles: true,
          quorum: 1,
          threshold: 0.01,
          mergeDelay: 1,
          delayOverride: false,
          timeout: 168,
          licenseLock: true,
          consensusLock: false,
          consensusDelay: 1,
          contributorsOnly: false,
          collaboratorsOnly: false,
          template: "autocracy"
        })
        break
      default:
        this.setState({
          version: 3,
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
          template: "recommended"
        })
    }
  }

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
          {/* <Typography align="center" variant="h4">Choose a Template</Typography>
          <FormControl component="fieldset">
            
            <InputLabel htmlFor="template">Template</InputLabel>
            <Select
              value={this.state.template}
              onChange={this.handleTemplate}
              inputProps={{
                name: 'template',
                id: 'template',
              }}
            >
              <MenuItem value={"anarchy"}>Anarchy</MenuItem>
              <MenuItem value={"autocracy"}>Autocracy</MenuItem>
              <MenuItem value={"consensus"}>Consensus</MenuItem>
              <MenuItem value={"democracy"}>Democracy</MenuItem>
              <MenuItem value={"meritocracy"}>Meritocracy</MenuItem>
              <MenuItem value={"oligarchy"}>Oligarchy</MenuItem>
              <MenuItem value={"recommended"}>Recommended</MenuItem>
              <MenuItem value={"adventure"}>Choose your own adventure</MenuItem>
            </Select>
          </FormControl> */}
          <Typography align="center" variant="h4" style={{ marginBottom: 30}}>Config Builder</Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Basic Info</FormLabel>
            <FormGroup row>
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
            <FormGroup row>
              <TextField
                id="quorum"
                label="Quorum"
                className=''
                value={this.state.quorum}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="threshold"
                label="Threshold"
                className=''
                value={this.state.threshold}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="mergeDelay"
                label="Merge Delay"
                className=''
                value={this.state.mergeDelay}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="delayOverride"
                label="Delay Override"
                className=''
                value={this.state.delayOverride}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="timeout"
                label="Timeout"
                className=''
                value={this.state.timeout}
                onChange={this.handleChange}
                margin="normal"
              />
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
              <TextField
                id="consensusDelay"
                label="Consensus Delay"
                className=''
                value={this.state.consensusDelay}
                onChange={this.handleChange}
                margin="normal"
              />
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
            </FormGroup>
            
          </FormControl>
          <CopyToClipboard onCopy={this.handleCopy} text={codeString}>
            <Button style={{ marginTop: 30, marginRight: "auto", marginLeft: "auto" }} variant="outlined">Copy to Clipboard</Button>
          </CopyToClipboard>
        </form>
        
        <SyntaxHighlighter 
          customStyle={{
            padding: 0,
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