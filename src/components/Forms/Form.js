import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const contentStyle = {
  padding: '40px',
};

const textFieldStyle = {
  display: 'block',
  width: '50%',
};

const buttonstyle = {
  marginTop: '20px',
  width: '50%',
};

export default class Form extends React.Component {
  state = {
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: '',
      lastNameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = 'Username needs to be atleast 5 characters long';
    }

    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Requires valid email';
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        username: '',
        usernameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
      });
      this.props.onChange({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      });
    }
  };

  _sendForm(e) {
    e.preventDefault();
    var _data = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      username: this.refs.userName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    };
    console.log(_data);
  }

  render() {
    return (
      <div style={contentStyle}>
        <form> 
          <TextField
            name="firstName"
            //hintText="First name"
            floatingLabelText="First name"
            value={this.state.firstName}
            onChange={e => this.change(e)}
            errorText={this.state.firstNameError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="firstName"
          />
          <br />
          <TextField
            name="lastName"
            //hintText="Last Name"
            floatingLabelText="Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
            errorText={this.state.lastNameError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="lastName"
          />
          <br />
          <TextField
            name="username"
            //hintText="Username"
            floatingLabelText="Username"
            value={this.state.username}
            onChange={e => this.change(e)}
            errorText={this.state.usernameError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="userName"
          />
          <br />
          <TextField
            name="email"
            //hintText="Email"
            floatingLabelText="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
            errorText={this.state.emailError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="email"
          />
          <br />
          <TextField
            name="password"
            //hintText="Password"
            floatingLabelText="Password"
            value={this.state.password}
            onChange={e => this.change(e)}
            errorText={this.state.passwordError}
            type="password"
            floatingLabelFixed
            style={textFieldStyle}
            ref="password"
          />
          <br />
          <RaisedButton
            label="Submit"
            onClick={e => this.onSubmit(e)}
            primary
            //fullWidth={true}
            secondary={true}
            style={buttonstyle}
          />
        </form>
      </div>
    );
  }
}
