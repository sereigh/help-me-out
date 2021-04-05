import React, { Component, Fragment } from 'react';
import Talk from 'talkjs';
import ChatButton from './ChatButton.jsx';
import DummyUser from '../../../server/database/data/sampleUser.json';

class Inbox extends Component {
  constructor(props) {
    super(props);

    this.inbox = undefined;
    DummyUser.id = DummyUser._id;
    let currentUser = JSON.parse(JSON.stringify(DummyUser));
    // const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
    // if (currentTalkjsUser) {
    //   currentUser = JSON.parse(currentTalkjsUser);
    // }

    this.state = {
      currentUser,
    };
  }

  componentDidMount() {
    const { currentUser } = this.state;
    Talk.ready
      .then(() => {
        const me = new Talk.User(currentUser);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tsdPQIUx',
            me,
          });
        }

        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <>
        <div style={{ height: '90vh' }} className="inbox-container" ref={(c) => this.container = c}>Loading...</div>
        <ChatButton />
      </>
    );
  }
}

export default Inbox;
