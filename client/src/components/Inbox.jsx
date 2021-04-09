import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from './MainPage/ProfileCard';
import MiniMap from './MainPage/MiniMap';
import DummyUser from '../../../server/database/data/sampleUser.json';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.inbox = undefined;
  }

  componentDidMount() {
    this.inbox = window.talkSession.createInbox();
    this.inbox.mount(this.container);
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <div className="main-page">
          <div className="main-page-left">
            <ProfileCard user={user} />
            <MiniMap zipcode={user.zip} />
          </div>
          <div className="inbox-loading">Loading Inbox...</div>
          <div className="inbox-container" ref={(c) => this.container = c} />
        </div>
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
