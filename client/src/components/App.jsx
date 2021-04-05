import React from 'react';

import NavBar from './NavBar';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import ProfilePage from './ProfilePage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      page: 'mainPage',
    };

    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(page) {
    this.setState({
      page,
    });
  }

  render() {
    const { user, page } = this.state;
    const isLoggedIn = page === 'mainPage' || page === 'profilePage';
    const avatar = user.photo || '#';
    const score = user.handy || 0;

    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} avatar={avatar} score={score} handleNav={this.handleNav} />
        {page === 'signUp' && <SignUp />}
        {page === 'logIn' && <LogIn />}
        {page === 'landingPage' && <LandingPage />}
        {page === 'mainPage' && <MainPage user={user} />}
        {page === 'profilePage' && <ProfilePage user={user} />}
      </div>
    );
  }
}

export default App;
