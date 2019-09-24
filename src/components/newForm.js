import React, { useState } from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import TextBlob from './textBlob'
import Form from './form'

const NewForm = ({ govs }) => {
  const [ govType, setGovType ] = useState('default')
  const handleChange = event => {
    console.log(event.target.value)
    setGovType(event.target.value)
  }
  return (
    <div>
      <form style={{ marginBottom: 40 }}>
        <Typography align="center" variant="h4" style={{ marginTop: 130, marginBottom: 40 }}>Config Builder</Typography>
        <FormLabel component="legend" style={{ marginBottom: 20}}>Government Type</FormLabel>
        <RadioGroup
          row
          name="government" 
          value="govType"
          onChange={handleChange}
        >
          <FormControlLabel 
            value="default" 
            control={<Radio />}
            label="Recommended"
            checked={govType === 'default'}
          />

          <FormControlLabel
            value="anarchy"
            control={<Radio />}
            label="Anarchy"
            checked={govType === 'anarchy'}
          />

          <FormControlLabel
            value="autocracy"
            control={<Radio />}
            label="Autocracy"
            checked={govType === 'autocracy'}
          />

          <FormControlLabel
            value="consensus"
            control={<Radio />}
            label="Consensus"
            checked={govType === 'consensus'}
          />

          <FormControlLabel
            value="democracy"
            control={<Radio />}
            label="Democracy"
            checked={govType === 'democracy'}
          />

          <FormControlLabel
            value="meritocracy"
            control={<Radio />}
            label="Meritocracy"
            checked={govType === 'meritocracy'}
          />

          <FormControlLabel
            value="oligarchy"
            control={<Radio />}
            label="Oligarchy"
            checked={govType === 'oligarchy'}
          />

          <FormControlLabel
            value="chooseOwn"
            control={<Radio />}
            label="Choose Your Own Adventure"
            checked={govType === 'chooseOwn'}
          />
        </RadioGroup>
        


      </form>
      
      {(() => {
        switch (govType) {
          case 'anarchy':
            return <TextBlob config={govs.anarchy} />
          case 'autocracy':
            return <TextBlob config={govs.autocracy} />
          case 'consensus':
            return <TextBlob config={govs.consensus} />
          case 'democracy':
            return <TextBlob config={govs.democracy} />
          case 'meritocracy':
            return <TextBlob config={govs.meritocracy} />
          case 'oligarchy':
            return <TextBlob config={govs.oligarchy} />
          case 'chooseOwn':
            return <Form />
          default:
            return <TextBlob config={govs.default} />
        }
      })()}
    </div>
  )
}

export default NewForm
