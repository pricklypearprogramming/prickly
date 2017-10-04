import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
//import ActionFavorite from 'material-ui/svg-icons/action/favorite';
//import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
//import '../css/forms.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveUser } from '../../Actions/saveUser';

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

const styles = {
  block: {
    maxWidth: '250px',
  },
  checkbox: {
    marginBottom: '16px',
  },
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     user: this.props.user,
    //   };
    // }

    this.state = {
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      userName: '',
      userNameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      passwordCfm: '',
      passwordCfmError: '',
    };
  }

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: '',
      lastNameError: '',
      userNameError: '',
      emailError: '',
      passwordError: '',
      passwordCfmError: '',
    };

    if (this.state.firstName.length === 0) {
      isError = true;
      errors.firstNameError = 'Requires First Name';
    }

    if (this.state.lastName.length === 0) {
      isError = true;
      errors.lastNameError = 'Requires Last Name';
    }

    if (this.state.userName.length === 0) {
      isError = true;
      errors.userNameError = 'Requires valid user name';
    }

    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Requires valid email';
    }

    if (this.state.password.length < 5) {
      isError = true;
      errors.passwordError = 'Password must be at least 6 characters';
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
        userName: '',
        userNameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        passwordCfm: '',
        passwordCfmError: '',
      });
      this.props.onChange({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        passwordCfm: '',
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

  // toggleChange = () => {
  //   this.setState({
  //     knowASL1: !this.state.knowASL1,
  //     knowASL2: this.state.knowASL2,
  //   });
  // };

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
          <TextField
            name="userName"
            //hintText="User Name"
            floatingLabelText="User Name"
            value={this.state.userName}
            onChange={e => this.change(e)}
            errorText={this.state.userNameError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="userName"
          />
          <br />
          <TextField
            name="email"
            //hintText="Email"
            floatingLabelText="Email Address"
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
            floatingLabelFixed
            style={textFieldStyle}
            type="password"
            ref="password"
          />
          <br />
          <TextField
            name="passwordCfm"
            //hintText="Confirm Password"
            floatingLabelText="Confirm Password"
            value={this.state.passwordCfm}
            onChange={e => this.change(e)}
            errorText={this.state.passwordCfmError}
            floatingLabelFixed
            style={textFieldStyle}
            type="password"
            ref="passwordCfm"
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

// <label>
//   <input
//     type="checkbox"
//     checked={this.state.knowASL1}
//     onChange={this.toggleChange}
//   />
//   Yes
// </label>
// <label>
//   <input
//     type="checkbox"
//     checked={this.state.knowASL2}
//     onChange={this.toggleChange}
//   />
//   No
// </label>

const mapStatetoProps = (state, props) => {
  const userId = parseInt(props.match.params.userId, 10);
  return {
    user: state.users.find(user => user.id === userId),
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveUser, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Register);
