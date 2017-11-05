import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

class Login extends Component {

  static propTypes = {
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired
    })
  }

  onLoginClick = loginData => {
    return this.props.firebase.login({
      provider: 'facebook',
      type: 'popup'
    });
  }

  render() {
    return (
      <div className="Login Login-wrapper">
        <div className="Login-container">
          <h1>Kore</h1>
          <button
            className="btnLoginFacebook full-width"
            onClick={this.onLoginClick}
          >Facebook</button>
        </div>
      </div>
    )
  }
}

const mapStateToProp = ({ firebase: { auth, profile } }) => ({
  auth,
  profile
})

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProp
  )
)(Login)
