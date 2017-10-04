import React from 'react';
import Header from './Header';
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple500, blueGrey500} from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500,
    accent1Color: blueGrey500,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <Main />
    </div>
  </MuiThemeProvider>
);

export default App;
