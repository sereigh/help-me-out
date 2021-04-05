
import React, { Component } from 'react';
import Talk from "talkjs";
import DummyUser from '../../../server/database/data/sampleUser.json';
import DummyFeed from '../../../server/database/data/sampleFeed.json';



class ChatButton extends Component {

    constructor(props) {
        super(props);

        DummyUser.id = DummyUser._id;
        let currentUser = JSON.parse(JSON.stringify(DummyUser));
        // const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
        // if (currentTalkjsUser) {
        //     currentUser = JSON.parse(currentTalkjsUser)
        // }
        this.state = {
            currentUser
        }
    }

    handleClick(userId) {
        // const { userId } = this.props;

        /* Retrieve the two users that will participate in the conversation */
        const { currentUser } = this.state;
        const user = DummyFeed.find(user => user._id === userId)

        /* Session initialization code */
        Talk.ready
        .then(() => {
            /* Create the two users that will participate in the conversation */
            const me = new Talk.User(currentUser);
            user.id = user._id;
            const other = new Talk.User(user)

            /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
            if (!window.talkSession) {
                window.talkSession = new Talk.Session({
                    appId: "tsdPQIUx",
                    me: me
                });
            }

            /* Get a conversation ID or create one */
            const conversationId = Talk.oneOnOneId(me, other);
            const conversation = window.talkSession.getOrCreateConversation(conversationId);

            /* Set participants of the conversations */
            conversation.setParticipant(me);
            conversation.setParticipant(other);

            /* Create and mount chatbox in container */
            this.chatbox = window.talkSession.createChatbox(conversation);
            this.chatbox.mount(this.container);
        })
        .catch(e => console.error(e));
    }
    render() {
        const { currentUser } = this.state;
        this.state.currentUser = 'hey';

        return (
<>

                                        <button onClick={(userId) => this.handleClick(user._id)}>Message</button>

                    <div className="chatbox-container" ref={c => this.container = c}>
                        <div id="talkjs-container" style={{height: "20vh"}}><i></i></div>
                    </div>
</>

        )
    }
}
export default ChatButton;