import React, { Component } from 'react';
import createUUID from 'create-uuid';
import Bubble from './Bubble/Bubble.container';
import { formatStdDate, isSameDay } from '../../../utils/utils';

import './Conversation.css';

// EMULATION BLOCK
import { pool } from '../../../utils/emulator';
const iterator = pool();
// EMULATION BLOCK

const separator = (date) => (
    <li key={ createUUID(5) } className="separator" >—  { formatStdDate(date) }  —</li>
);

const bubbleWithKey = (data) => (
    <Bubble key={ createUUID(5) } { ...data } />
);

class Conversation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mustShowShadow: false
        };

        this.onConversationScroll = this.onConversationScroll.bind(this);
        this.conversation = null;
    }

    componentDidMount() {
        this.conversation.scrollTop = 0;

        // EMULATION BLOCK
        setTimeout(() => {
            this.props.sendMessage(iterator.next().value);
        }, 2000)
        // EMULATION BLOCK
    }

    // EMULATION BLOCK
    componentWillReceiveProps(nextProps) {
        if (nextProps.messages.list[0].from === this.props.users.admin.id) {
            setTimeout(() => {
                this.props.sendMessage(iterator.next().value);
            }, 2000)
        }
    }
    // EMULATION BLOCK

    onConversationScroll(e) {
        const { showShadow, hideShadow } = this.props;

        if (e.target.scrollTop > 50) {
            showShadow()
        } else {
            hideShadow()
        }
    }

    render() {

        const data = this.props.messages.list;
        const withSeparators = [];

        if (data.length) {
            withSeparators.push(
                separator(data[0].date)
            );

            for (let i = 0, len = data.length; i < len - 1; i++) {
                if (!isSameDay(data[i].date, data[i + 1].date)) {
                    withSeparators.push(
                        bubbleWithKey(data[i]),
                        separator(data[i + 1].date)
                    );
                } else {
                    withSeparators.push(
                        bubbleWithKey(data[i])
                    );
                }
            }

            withSeparators.push(
                bubbleWithKey(data[data.length - 1])
            );
        }

        return (
            <ul className="conversation"
                onScroll={ this.onConversationScroll } ref={ (c) => this.conversation = c }>
                { withSeparators }
            </ul>
        )
    }
}

export default Conversation;