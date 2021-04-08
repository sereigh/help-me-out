import React from 'react';
import PropTypes from 'prop-types';
import Talk from 'talkjs';

import DummyUser from '../../../server/database/data/sampleUser.json';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.inbox = undefined;
  }

  componentDidMount() {
    const { user } = this.props;
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
      <>
        <div className="inbox-loading">Loading Inbox...</div>
        <div className="inbox-container" ref={(c) => this.container = c} />
      </>
    );
  }
}

Inbox.defaultProps = {
  user: DummyUser,
};

Inbox.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]),
};

export default Inbox;
