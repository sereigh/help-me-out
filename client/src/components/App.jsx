/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { Router, Switch, Route } from 'react-router-dom';
import Talk from 'talkjs';

import sampleUser from '../../../server/database/data/sampleUser.json';

import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Inbox from './Inbox';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: sampleUser,
      auth: false,
    };

    this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
    this.responseGoogleFailure = this.responseGoogleFailure.bind(this);
    this.inboxNotifier = this.inboxNotifier.bind(this);
  }

  responseGoogleSuccess(response) {
    // eslint-disable-next-line no-console
    console.log(response);
    const { history } = this.props;
    const { profileObj } = response;

    axios
      .post('/users', profileObj)
      .then((res) => {
        if (res.data[0] === true) {
          this.setState({
            user: res.data[1],
            auth: true,
          }, () => {
            history.push('/main');
          });
        } else {
          this.setState({
            user: res.data[1],
            auth: true,
          }, () => {
            history.push('/profile');
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  responseGoogleFailure() {
    this.setState({
      auth: false,
    });

    // eslint-disable-next-line no-alert
    alert('An unexpected error occured during the login process');
  }

  inboxNotifier() {
    const { user } = this.state;
    Talk.ready
      .then(() => {
        // eslint-disable-next-line no-underscore-dangle
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
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));
  }

  render() {
    const { history } = this.props;
    const { user, auth } = this.state;
    const avatar = user.photo || '#';
    const score = user.handy || 0;

    return (
      <Router history={history}>
        <NavBar
          auth={auth}
          responseGoogleSuccess={this.responseGoogleSuccess}
          responseGoogleFailure={this.responseGoogleFailure}
          inboxNotifier={this.inboxNotifier}
          avatar={avatar}
          score={score}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <LandingPage />
            )}
          />
          <Route
            path="/main"
            render={() => (
              <MainPage user={user} />
            )}
          />
          <Route
            path="/inbox"
            render={() => (
              <Inbox user={user} />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <ProfilePage user={user} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
