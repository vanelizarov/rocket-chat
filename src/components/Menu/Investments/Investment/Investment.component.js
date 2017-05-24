import React, { Component } from 'react';
// import Moment from 'moment';
import { formatStdDate, formatMoney } from '../../../../utils/utils'

import './Investment.css';

class Investment extends Component {
    render() {

        const {
            name,
            bank,
            logoURL,
            rate,
            sum,
            begin,
            period
        } = this.props;

        return (
            <li className="investment">
                <img className="investment__logo"
                     src={ logoURL }
                     alt="logo"/>
                <div className="investment__name">{ name }</div>
                <div className="investment__bank">{ bank }</div>
                <div className="investment__sum">{ formatMoney(sum, false) }</div>
                <div className="investment__rate">Ставка: { rate }%</div>
                <div className="investment__begin">Дата начала срока: { formatStdDate(begin) }</div>
                <div className="investment__period">Срок размещения: { period } дней</div>
            </li>
        )
    }
}

export default Investment;