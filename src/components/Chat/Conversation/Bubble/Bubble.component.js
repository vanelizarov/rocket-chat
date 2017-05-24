import React, { Component } from 'react';

import { formatBillDate, formatMoney } from '../../../../utils/utils';
import Avatar from './Avatar/Avatar.component';

import './Bubble.css';

class Bubble extends Component {
    render() {

        const { users, bills, from, text, transaction } = this.props;
        const { admin, client } = users;

        const bubbleClassName = `bubble bubble_${ from !== admin.id ? 'left' : 'right' }`;

        if (transaction !== null) {

            const { operationId, billId } = transaction;
            const operation = bills.list
                .filter((b) => b.id === billId)[0].history
                .filter((op) => op.id === operationId)[0];

            const { date, cardNumber, sum, type } = operation;
            const sumClassName = `${ sum >= 0 ? 'positive' : 'negative' }`;

            return (
                <li className={ bubbleClassName }>
                    <Avatar url={ from === admin.id ? admin.avatarURL : client.avatarURL }
                            isOperation/>
                    <div className="msg msg_operation">
                        <h4 className="msg__title">Операция</h4>
                        <div className="msg__date">{ formatBillDate(date) }</div>
                        <div className="msg__info">
                            { type } ****&nbsp;{ cardNumber }
                            &nbsp;&nbsp;
                            <span className={ sumClassName }>
                            { formatMoney(sum) }
                        </span>
                        </div>
                    </div>
                </li>
            )
        }

        return (
            <li className={ bubbleClassName }>
                <Avatar url={ from === admin.id ? admin.avatarURL : client.avatarURL }
                        isOperation={ false }/>
                <div className="msg msg_std">
                    <span className="msg__name">
                        { from === admin.id ? admin.name : client.name }:
                    </span>
                    &nbsp;
                    { text }
                </div>
            </li>
        )
    }
}

export default Bubble;