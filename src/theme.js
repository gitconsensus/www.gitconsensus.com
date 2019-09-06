import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80d8ff',
    },
    secondary: {
      main: '#212121',
    },
    error: {
      main: '#d81b60',
    }
  },
});

export default theme;