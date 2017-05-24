import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import createUUID from 'create-uuid';

import { formatBillDate, formatMoney } from '../../../../utils/utils';

import './BillInfo.css';

import IconClose from './icon_close.svg';
import IconSend from './icon-send.svg';

class BillInfo extends Component {

    constructor(props) {
        super(props);

        this.onSendBtnClick = this.onSendBtnClick.bind(this);
    }

    onSendBtnClick(e, index) {
        // console.log(index);

        const { match, bills, users, sendMessage } = this.props;
        const billId = parseInt(match.params.billId, 10);
        const operationId = bills.list.filter((b) => b.id === billId)[0].history[index].id;

        const payload = {
            from: users.admin.id,
            text: '',
            date: (new Date()).getTime(),
            transaction: {
                operationId,
                billId
            }
        };

        sendMessage(payload);
    }

    render() {
        const { match, bills } = this.props;

        const billId = parseInt(match.params.billId, 10);
        const bill = bills.list.filter((b) => b.id === billId)[0];
        const { id, total, currency, rate, createdAt, history } = bill;

        return (
            <div className="bill-info">
                <div className="bill-info__data">
                    <NavLink to={ '/bills' }
                             className="bill-info__data__link">
                        <img src={ IconClose } alt="c"/>
                    </NavLink>
                    <h5 className="bill-info__data__number">Счет № { id }</h5>
                    <h4 className="bill-info__data__total">{ formatMoney(total, false, currency) }</h4>
                    <div className="bill-info__data__rate">{ rate }% годовых</div>
                    <div className="bill-info__data__date">Создан: { formatBillDate(createdAt) }</div>
                </div>
                <div className="bill-info__history">
                    <div className="bill-info__history__title">История операций</div>
                    <ul className="bill-info__history__list">
                        {
                            history.map((op, i) => {
                                const sumClassName = `${ op.sum >= 0 ? 'positive' : 'negative' }`;

                                return (
                                    <li className="bill-info__history__list__cell"
                                        key={ createUUID(3) }>
                                        <button className="btn-send"
                                                onClick={ (e) => this.onSendBtnClick(e, i) }>
                                            <img src={ IconSend } alt=""/>
                                        </button>
                                        <div className="date">{ formatBillDate(op.date) }</div>
                                        <div className="info">
                                            { op.type } ****&nbsp;{ op.cardNumber }
                                            &nbsp;&nbsp;&nbsp;
                                            <span className={ sumClassName }>
                                                { formatMoney(op.sum, true, currency) }
                                            </span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

export default BillInfo;