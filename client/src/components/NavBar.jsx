import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({
  isLoggedIn,
  avatar,
  score,
  handleNav,
}) => (
  <>
    {!isLoggedIn && (
      <nav>
        <span>Help Me Out!</span>
        <button type="button" onClick={() => handleNav('signUp')}>Sign Up</button>
        <button type="button" onClick={() => handleNav('logIn')}>Log In</button>
      </nav>
    )}
    {isLoggedIn && (
      <nav>
        <span>Help Me Out!</span>
        <div>
          <button type="button" onClick={() => handleNav('mainPage')}>Dashboard</button>
          <button type="button" onClick={() => handleNav('profilePage')}>Account</button>
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
  handleNav: PropTypes.func.isRequired,
};

export default NavBar;
