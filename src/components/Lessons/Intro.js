import React from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import {purple500, blueGrey500} from 'material-ui/styles/colors';

import Form from '../Forms/Form';
import '../css/style.css';

// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: purple500,
//     accent1Color: blueGrey500,
//   },
// });

export default class Intro extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userName: '',
  //     userNameError: '',
  //     password: '',
  //     passwordError: '',
  //     email: '',
  //     emailError: '',
  //   };

  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.onChange = this.onChange.bind(this);
  // }

  // onSubmit = fields => {
  //   this.setState({fields});
  // };

  // onChange = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue,
  //     },
  //   });
  // };

  render() {
    return (
      <div>
        <div>
          <h2>This is Intro Page</h2>
        </div>
        <div className="Intro" />
        <Form />
      </div>
    );
  }

  // <p>{JSON.stringify(this.state.fields, null, 2)}</p>
  // <Form onChange={fields => this.onChange(fields)} />
  //
}
