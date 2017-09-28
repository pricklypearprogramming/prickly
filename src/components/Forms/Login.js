import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
//import Checkbox from 'material-ui/Checkbox';
//import ActionFavorite from 'material-ui/svg-icons/action/favorite';
//import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
//import '../css/forms.css';
import {connect} from 'react-redux';
import {saveUser} from '../../Actions/saveUser';
//import {addUser} from '../../Actions/addUser';
import {bindActionCreators} from 'redux';

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

// const styles = {
//   block: {
//     maxWidth: '250px',
//   },
//   checkbox: {
//     marginBottom: '16px',
//   },
// };

class Login extends React.Component {
  state = {
    userName: '',
    userNameError: '',
    password: '',
    passwordError: '',
    email: '',
    emailError: '',
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
      userNameError: '',
      passwordError: '',
      emailError: '',
    };

    if (this.state.userName.length < 5) {
      isError = true;
      errors.userNameError = 'Username needs to be atleast 5 characters long';
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
      //Send form to database
      //this._sendForm();
      // clear form
      //if (!err) {}
      this.setState({
        userName: '',
        userNameError: '',
        password: '',
        passwordError: '',
        email: '',
        emailError: '',
      });
      this.props.onChange({
        userName: '',
        password: '',
        email: '',
      });
    }
  };

  _sendForm(e) {
    e.preventDefault();
    var _data = {
      userName: this.refs.userName.value,
      password: this.refs.password.value,
      email: this.refs.email.value,
    };
    console.log(_data);
  }

  render() {
    return (
      <div style={contentStyle}>
        <form>
          <TextField
            name="userName"
            //hintText="UserName"
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
          <RaisedButton
            label="Login"
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

const mapStatetoProps = (state, props) => {
  const userId = parseInt(props.match.params.userId, 10);
  return {
    user: state.users.find(user => user.id === userId),
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveUser, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Login);
