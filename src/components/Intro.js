import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Form from './Form';
import '../css/style.css';

injectTapEventPlugin();

class Intro extends React.Component {
  state = {
    fields: {},
  };

  // onSubmit = fields => {
  //   this.setState({fields});
  // };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <h2>This is Intro Page</h2>
          </div>
          <div className="Intro">
            <Form onChange={fields => this.onChange(fields)} />
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Intro;
