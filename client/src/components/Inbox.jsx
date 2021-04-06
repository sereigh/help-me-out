import React, { Component, Fragment } from 'react';
import Talk from 'talkjs';
import MessageButton from './MessageButton.jsx';
import DummyUser from '../../../server/database/data/sampleUser.json';

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.inbox = undefined;
  }

  componentDidMount() {
    const { user = DummyUser } = this.props;
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

        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <div className="inbox-container" ref={(c) => this.container = c}>
        Loading...
      </div>
    );
  }
}

export default Inbox;
