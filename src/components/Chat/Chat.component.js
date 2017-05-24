import React, { Component } from 'react';
import './Chat.css';

import Input from './Input/Input.container';
import Conversation from './Conversation/Conversation.container';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.onSendClick.bind(this);

    }

    onSendClick() {
        console.log('b');
    }

    render() {
        return (
            <main className="chat">
                <div>
                    <h1 className="chat__title">Чат</h1>
                    <Input/>
                </div>
                <Conversation/>
            </main>
        )
    }
}

export default Chat;