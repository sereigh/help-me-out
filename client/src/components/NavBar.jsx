/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import HandyIcon from './HandyIcon';

const NavBar = ({
  auth,
  responseGoogleSuccess,
  responseGoogleFailure,
  history,
  inboxNotifier,
  avatar,
  score,
  logout,
}) => (
  <>
    {!auth && (
      <nav>
        <span>Help Me Out!</span>
        <GoogleLogin
          className="google-login"
          clientId="212175657739-70o4dkki5481hs0hdlkmkor20ugn7sh0.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy="single_host_origin"
        />
      </nav>
    )}
    {auth && (
      <nav>
        <span>Help Me Out!</span>
        <span className="navbar-right">
          <button
            type="button"
            onClick={() => {
              history.push('/main');
            }}
          >
            Dashboard
          </button>
          <button
            type="button"
            id="inbox-notifier"
            onClick={() => {
              history.push('/inbox');
            }}
          >
            Inbox
          </button>
          {inboxNotifier()}
          <button
            type="button"
            onClick={() => {
              history.push('/profile');
            }}
          >
            Account
          </button>
          <span
            role="button"
            onClick={() => history.push('/profile')}
            onKeyPress={() => history.push('/profile')}
            tabIndex={0}
          >
            <img src={avatar} alt="avatar" />
          </span>
          <span>{`Handy Score: ${score}`}</span>
          <HandyIcon score={score} />
          <button
            type="button"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </button>
        </span>
      </nav>
    )}
  </>
);

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  responseGoogleSuccess: PropTypes.func.isRequired,
  responseGoogleFailure: PropTypes.func.isRequired,
  inboxNotifier: PropTypes.func.isRequired,
};

export default withRouter(NavBar);
