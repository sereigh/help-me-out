import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ isLoggedIn, avatar, score, handleNav }) => (
  <>
    {!isLoggedIn && (
      <nav>
        <span>Help Me Out!</span>
        <button type="button" onClick={() => handleNav('signUp')}>
          Sign Up
        </button>
        <button type="button" onClick={() => handleNav('logIn')}>
          Log In
        </button>
      </nav>
    )}
    {isLoggedIn && (
      <nav>
        <span>Help Me Out!</span>
        <span className="navbar-right">
          <button type="button" onClick={() => handleNav('mainPage')}>
            Dashboard
          </button>
          <button type="button" onClick={() => handleNav('inbox')}>
            Inbox
          </button>
          <button type="button" onClick={() => handleNav('profilePage')}>
            Account
          </button>
          <span
            role="button"
            onClick={() => handleNav('profilePage')}
            onKeyPress={() => handleNav('profilePage')}
            tabIndex={0}
          >
            <img src={avatar} alt="avatar" />
          </span>
          <span>{`Handy Score: ${score}`}</span>
          <button type="button" onClick={() => handleNav('landingPage')}>
            Log Out
          </button>
        </span>
      </nav>
    )}
  </>
);

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleNav: PropTypes.func.isRequired,
};

export default NavBar;
