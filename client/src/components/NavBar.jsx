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
        <div className="page-title">Help Me Out!</div>
        <span className="navbar-right">
          <button type="button" onClick={() => {history.push('/main')}}>Dashboard</button>
          <button type="button" id="inbox-notifier" onClick={() => {history.push('/inbox')}}>Inbox</button>
          {inboxNotifier()}
          <button type="button" onClick={() => {history.push('/profile')}}>Account</button>
          <span
            role="button"
            onClick={() => history.push('/profile')}
            onKeyPress={() => history.push('/profile')}
            tabIndex={0}
          >
            <img className="nav-avatar" src={avatar} alt="avatar" />
          </span>
          <span className="handy-score">{`Handy Score: ${score}`}</span>
          <HandyIcon score={score} />
          <button type="button" onClick={() => history.push('/')}>Log Out</button>
        </span>
      </nav>
    )}
    {/* {!isLoggedIn && (
      <nav>
        <div className="page-title">Help Me Out!</div>
        <GoogleLogin
          className="google-login"
          clientId="212175657739-70o4dkki5481hs0hdlkmkor20ugn7sh0.apps.googleusercontent.com"
          // render={renderProps => (
          //   <button onClick={renderProps.onClick} disabled={renderProps.disabled} class="google-login">Continue with Google</button>
          // )}
          buttonText="Continue with Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy="single_host_origin"
        />
      </nav>
    )}
    {isLoggedIn && (
      <nav>
        <div className="page-title">Help Me Out!</div>
        <span className="navbar-right">
          <button type="button" onClick={() => handleNav('mainPage')}>Dashboard</button>
          <button type="button" id="inbox-notifier" onClick={() => handleNav('inbox')}>Inbox (0)</button>
          {inboxNotifier()}
          <button type="button" onClick={() => handleNav('profilePage')}>Account</button>
          <span
            role="button"
            onClick={() => handleNav('profilePage')}
            onKeyPress={() => handleNav('profilePage')}
            tabIndex={0}
          >
            <img className="nav-avatar" src={avatar} alt="avatar" />
          </span>
          <span className="handy-score">{`Handy Score: ${score}`}</span>
          <HandyIcon score={score} />
          <button type="button" onClick={() => handleNav('landingPage')}>Log Out</button>
        </span>
      </nav>
    )} */}
  </>
);

// NavBar.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   score: PropTypes.number.isRequired,
//   handleNav: PropTypes.func.isRequired,
//   responseGoogleSuccess: PropTypes.func.isRequired,
//   responseGoogleFailure: PropTypes.func.isRequired,
//   inboxNotifier: PropTypes.func.isRequired,
// };

export default withRouter(NavBar);
