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
  logout,
}) => (
  <>
    {!auth && (
      <nav>
        <button
          type="button"
          className="page-title"
          onClick={() => {
            history.push('/');
          }}
        >
          Help Me Out!
        </button>
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
        <button
          type="button"
          className="page-title"
          onClick={() => {
            history.push('/');
          }}
        >
          Help Me Out!
        </button>
        <span className="navbar-right">
          <button
            type="button"
            onClick={() => {
              history.push('/dashboard');
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
              history.push('/account');
            }}
          >
            Account
          </button>
          <span
            role="button"
            onClick={() => history.push('/account')}
            onKeyPress={() => history.push('/account')}
            tabIndex={0}
          >
            <img className="nav-avatar" src={avatar} alt="avatar" />
          </span>
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
  responseGoogleSuccess: PropTypes.func.isRequired,
  responseGoogleFailure: PropTypes.func.isRequired,
  inboxNotifier: PropTypes.func.isRequired,
};

export default withRouter(NavBar);
