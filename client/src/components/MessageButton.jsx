import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Talk from 'talkjs';

import DummyUser from '../../../server/database/data/sampleUser.json';
import DummyFeed from '../../../server/database/data/sampleFeed.json';

class MessageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatboxId: '',
      showChat: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.chat = this.chat.bind(this);
    this.resetChat = this.resetChat.bind(this);
    this.renderChat = this.renderChat.bind(this);
  }

  componentDidMount() {
    this.setState({ chatboxId: String(Math.random()) });
  }

  handleClick() {
    const chatbox = document.getElementsByClassName('chatbox-container');
    if (chatbox.length > 0) {
      for (let i = 0; i < chatbox.length; i += 1) {
        ReactDOM.unmountComponentAtNode(chatbox[i]);
      }
    }
    this.setState({ showChat: false }, this.resetChat);
  }

  chat() {
    const { user, otherUser } = this.props;
    Talk.ready
      .then(() => {
        user.id = user._id;
        user.role = 'member';
        const me = new Talk.User(user);
        otherUser.id = otherUser._id;
        otherUser.role = 'member';
        const other = new Talk.User(otherUser);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tsdPQIUx',
            me,
          });
        }

        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(conversationId);

        conversation.setParticipant(me);
        conversation.setParticipant(other);
        this.chatbox = window.talkSession.createChatbox(conversation);
        this.chatbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  resetChat() {
    this.setState({ showChat: true }, this.renderChat);
  }

  renderChat() {
    const { chatboxId } = this.state;
    ReactDOM.render(
      <div className="chatbox-container" ref={(c) => this.container = c} />,
      document.getElementById(`${chatboxId}`),
    );
    this.chat();
  }

  render() {
    const { showChat, chatboxId } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleClick}>Message</button>
        {showChat && <div className="chatbox-container" id={`${chatboxId}`} />}
      </>
    );
  }
}

MessageButton.defaultProps = {
  user: DummyUser,
  otherUser: DummyFeed[3],
};

MessageButton.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]),
  otherUser: PropTypes.oneOfType([PropTypes.object]),
};

export default MessageButton;
