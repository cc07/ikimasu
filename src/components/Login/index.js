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

  onLoginClick = () => {

    const { dispatch, history } = this.props;

    return this.props.firebase.login({
      provider: 'facebook',
      type: 'popup'
    }).then(userInfo => {
      dispatch({
        type: 'LOGIN::SUCCESS',
        response: userInfo
      })
      history.push('/main');
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

const mapStateToProp = ({ firebase }) => ({
  auth: firebase.auth,
  profile: firebase.profile
})

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProp
  )
)(Login)
