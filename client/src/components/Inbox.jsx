import React from 'react';

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
    return (
      <>
        <div className="inbox-loading">Loading Inbox...</div>
        <div className="inbox-container" ref={(c) => this.container = c} />
      </>
    );
  }
}

export default Inbox;
