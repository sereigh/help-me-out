import React from 'react';
import axios from 'axios';
import Talk from 'talkjs';

import sampleUser from '../../../server/database/data/sampleUser.json';

import NavBar from './NavBar';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LandingPage from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Inbox from './Inbox';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: sampleUser,
      page: 'mainPage',
    };

    this.handleNav = this.handleNav.bind(this);
    this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
    this.responseGoogleFailure = this.responseGoogleFailure.bind(this);
    this.inboxNotifier = this.inboxNotifier.bind(this);
  }

  handleNav(page) {
    this.setState({
      page,
    });
  }

  responseGoogleSuccess(response) {
    // eslint-disable-next-line no-console
    console.log(response);
    const { profileObj } = response;

    axios
      .post('/users', profileObj)
      .then((res) => {
        console.log(res);
        if (res.data[0] === true) {
          this.setState(
            {
              user: res.data[1],
            },
            () => {
              this.handleNav('mainPage');
            }
          );
        } else {
          this.setState(
            {
              user: res.data[1],
            },
            () => {
              this.handleNav('profilePage');
            }
          );
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  responseGoogleFailure(response) {
    // eslint-disable-next-line no-console
    console.log('Log in failed, please try again');
  }

  inboxNotifier() {
    const { user } = this.state;
    Talk.ready
      .then(() => {
        user.id = user._id;
        user.role = 'member';
        const me = new Talk.User(user);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tsdPQIUx',
            me,
          });
        }
        window.talkSession.unreads.on('change', (unreadConversations) => {
          const amountOfUnreads = unreadConversations.length;
          const notifier = document.getElementById('inbox-notifier');
          notifier.innerHTML = `Inbox (${amountOfUnreads})`;
          if (amountOfUnreads > 0) {
            notifier.style.backgroundColor = 'red';
          }

          if (amountOfUnreads > 0) {
            document.title = `( ${amountOfUnreads} ) New Messages`;
          } else {
            document.title = 'Help Me Out!';
          }
        });
      })
      .catch((e) => console.error(e));
  }

  render() {
    const { user, page } = this.state;
    const isLoggedIn =
      page === 'mainPage' || page === 'profilePage' || page === 'inbox';
    const avatar = user.photo || '#';
    const score = user.handy || 0;

    return (
      <div>
        <NavBar
          isLoggedIn={isLoggedIn}
          avatar={avatar}
          score={score}
          handleNav={this.handleNav}
          responseGoogleSuccess={this.responseGoogleSuccess}
          responseGoogleFailure={this.responseGoogleFailure}
          inboxNotifier={this.inboxNotifier}
        />
        {page === 'signUp' && <SignUp />}
        {page === 'logIn' && <LogIn />}
        {page === 'landingPage' && <LandingPage />}
        {page === 'mainPage' && <MainPage user={user} />}
        {page === 'profilePage' && <ProfilePage user={user} />}
        {page === 'inbox' && <Inbox user={user} />}
      </div>
    );
  }
}

export default App;
