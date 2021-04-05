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
      page: 'landingPage',
    };
  }

  render() {
    const { user, page } = this.state;

    return (
      <div>
        <NavBar isLoggedIn={page === 'mainPage' || page === 'profilePage'} avatar={user.photo || '#'} score={user.handy || 0} />
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
