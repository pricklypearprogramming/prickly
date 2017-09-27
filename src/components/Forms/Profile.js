import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
//import ActionFavorite from 'material-ui/svg-icons/action/favorite';
//import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
//import '../css/forms.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveUser} from '../../Actions/saveUser';

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

class Profile extends React.Component {
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
      email: '',
      emailError: '',
      linkedInURL: '',
      linkedInURLError: '',
      facebookURL: '',
      facebookURLError: '',
      knowASL1: false,
      knowASL1Error: '',
      knowASL2: true,
      knowASL2Error: '',
      experience: '',
      experienceError: '',
      knowHtml: false,
      knowHtmlError: '',
      knowCss: false,
      knowCssError: '',
      knowJs: false,
      knowJsError: '',
      knowledge: '',
      knowledgeError: '',
      agree: false,
      agreeError: '',
    };
  }

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
      emailError: '',
      linkedInURLError: '',
      facebookURLError: '',
      knowASL1Error: '',
      knowASL2Error: '',
      experienceError: '',
      knowHtmlError: '',
      knowCssError: '',
      knowJsError: '',
      knowledgeError: '',
      agreeError: '',
    };

    if (this.state.firstName.length === 0) {
      isError = true;
      errors.firstNameError = 'Requires First Name';
    }

    if (this.state.lastName.length === 0) {
      isError = true;
      errors.lastNameError = 'Requires Last Name';
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
        email: '',
        emailError: '',
        linkedInURL: '',
        linkedInURLError: '',
        facebookURL: '',
        facebookURLError: '',
        experience: '',
        experienceError: '',
        knowledge: '',
        knowledgeError: '',
      });
      this.props.onChange({
        firstName: '',
        lastName: '',
        email: '',
        linkedInURL: '',
        facebookURL: '',
        experience: '',
        knowledge: '',
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

  toggleChange = () => {
    this.setState({
      knowASL1: !this.state.knowASL1,
      knowASL2: this.state.knowASL2,
    });
  };

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
            name="linkedInURL"
            //hintText="LinkedInURL"
            floatingLabelText="LinkedInURL"
            value={this.state.linkedInURL}
            onChange={e => this.change(e)}
            errorText={this.state.linkedInURLError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="linkedInURL"
          />
          <br />
          <TextField
            name="facebookURL"
            //hintText="FacebookURL"
            floatingLabelText="FacebookURL"
            value={this.state.facebookURL}
            onChange={e => this.change(e)}
            errorText={this.state.facebookURLError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="facebookURL"
          />
          <br />
          <p>Are you fluent in American Sign Language? </p>

          <RadioButtonGroup name="knowASL">
            <RadioButton
              value={this.state.knowASL1}
              onChange={e => this.change(e)}
              errorText={this.state.knowASL1Error}
              label="Yes"
              style={styles.radioButton}
            />
            <RadioButton
              value={this.state.knowASL2}
              onChange={e => this.change(e)}
              errorText={this.state.knowASL2Error}
              label="No"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <p>If yes, please let us know about your expirence:</p>
          <TextField
            name="experience"
            //hintText="Experience"
            floatingLabelText="experience"
            value={this.state.experience}
            onChange={e => this.change(e)}
            errorText={this.state.experienceError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="experience"
          />
          <br />
          <p>What areas do you have knowledge in?</p>
          <div style={styles.block}>
            <Checkbox
              label="HTML"
              style={styles.checkbox}
              name="knowHtml"
              value={this.state.knowHtml}
              onChange={e => this.change(e)}
              errorText={this.state.knowHtmlError}
              ref="knowHtml"
            />
            <Checkbox
              label="CSS"
              style={styles.checkbox}
              name="knowCss"
              value={this.state.knowCss}
              onChange={e => this.change(e)}
              errorText={this.state.knowCssError}
              ref="knowCss"
            />
            <Checkbox
              label="JavaScript"
              style={styles.checkbox}
              name="knowJs"
              value={this.state.knowJs}
              onChange={e => this.change(e)}
              errorText={this.state.knowJsError}
              ref="knowJs"
            />
          </div>
          <p>
            Please explaine your experience in these areas of web development:
          </p>
          <TextField
            name="knowledge"
            //hintText="Knowledge"
            floatingLabelText="knowledge"
            value={this.state.knowledge}
            onChange={e => this.change(e)}
            errorText={this.state.knowledgeError}
            floatingLabelFixed
            style={textFieldStyle}
            ref="knowledge"
          />
          <br />
          <h3>AGREEMENT</h3>
          <p>
            {' '}
            Prickly Pear Programming is an open-source, user-generated learning
            platform. I agree that any material that I contribute to this
            platform can be used and distributed by members of the Prickly Pear
            Programming team in any way they see fit. I understand that Prickly
            Pear Programming uses social media including but not limited to
            Facebook, LinkedIn, and YouTube, and that material submitted to the
            platform can or will be distributed and marketed on these networks.
            I also understand that I can still use any material I create in any
            way I see fit. I promise to only contribute content that I believe
            to be of the highest accuracy and integrity.
          </p>
          <div style={styles.block}>
            <Checkbox
              label="Agree"
              style={styles.checkbox}
              name="agree"
              value={this.state.agree}
              onChange={e => this.change(e)}
              errorText={this.state.agreeError}
              ref="agree"
            />
          </div>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Profile);
