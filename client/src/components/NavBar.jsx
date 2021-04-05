import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ isLoggedIn, avatar, score }) => (
  <>
    {!isLoggedIn && (
      <nav>
        <button type="button">Help Me Out!</button>
        <button type="button">Sign Up/Log In</button>
      </nav>
    )}
    {isLoggedIn && (
      <nav>
        <button type="button">Help Me Out!</button>
        <div>
          <button type="button">Account</button>
          <img src={avatar} alt="avatar" />
          <span>{`Handy Score: ${score}`}</span>
        </div>
      </nav>
    )}
  </>
);

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default NavBar;
