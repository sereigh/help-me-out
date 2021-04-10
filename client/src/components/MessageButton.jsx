import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Talk from 'talkjs';
import { AiOutlineMessage } from 'react-icons/ai';

import DummyUser from '../../../server/database/data/sampleUser.json';
import DummyFeed from '../../../server/database/data/sampleFeed.json';

class MessageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatboxId: '',
      showChat: false,
      isFocus: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.chat = this.chat.bind(this);
    this.resetChat = this.resetChat.bind(this);
    this.renderChat = this.renderChat.bind(this);
    this.minimizeChat = this.minimizeChat.bind(this);
    this.focusChat = this.focusChat.bind(this);
  }

  componentDidMount() {
    this.setState({ chatboxId: String(Math.random()) });
  }

  handleClick() {
    const chatNode = document.getElementsByClassName('chatbox-container');
    if (chatNode.length > 0) {
      for (let i = 0; i < chatNode.length; i += 1) {
        if (this.chatbox) {
          this.chatbox.destroy();
        }
        ReactDOM.unmountComponentAtNode(chatNode[i]);
      }
    }
    this.setState({ showChat: false }, this.resetChat);
  }

  minimizeChat() {
    const { showChat, chatboxId, isFocus } = this.state;
    if (showChat && isFocus) {
      document.getElementById(`${chatboxId + 1}`).style.height = '60px';
    }
    this.setState({ isFocus: false });
  }

  focusChat() {
    const { showChat, chatboxId } = this.state;
    if (showChat) {
      document.getElementById(`${chatboxId + 1}`).style.height = '400px';
    }
    this.setState({ isFocus: true });
  }

  chat() {
    const { chatboxId } = this.state;
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
        this.chatbox.on('blur', this.minimizeChat);
        this.chatbox.on('focus', this.focusChat);
        // document.getElementById(`${chatboxId + 1}`).style.height = '400px';
        document.getElementById(`${chatboxId + 1}`).focus();
      })
      .catch((e) => console.error(e));
  }

  resetChat() {
    this.setState({ showChat: true }, this.renderChat);
  }

  renderChat() {
    const { chatboxId } = this.state;
    ReactDOM.render(
      <div className="chatbox-container" id={`${chatboxId + 1}`} onBlur={this.minimizeChat} onFocus={this.focusChat} ref={(c) => this.container = c} />,
      document.getElementById(`${chatboxId}`),
    );
    this.chat();
  }

  render() {
    const { showChat, chatboxId } = this.state;
    const chatButton = this.props.usedIn
      ? (
        <div className="card-footer-button" onClick={this.handleClick}>
          <AiOutlineMessage />
          Message
        </div>
      )
      : <button type="button" onClick={this.handleClick}>Message</button>;

    return (
      <>
        {chatButton}
        {showChat
        && <div className="chatbox-container" id={`${chatboxId}`} />}
      </>
    );
  }
}

MessageButton.defaultProps = {
  user: DummyUser,
  otherUser: DummyFeed.getHelp[3].tool_owner,
};

MessageButton.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]),
  otherUser: PropTypes.oneOfType([PropTypes.object]),
};

export default MessageButton;
