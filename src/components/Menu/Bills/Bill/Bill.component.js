import React from 'react';
import { NavLink } from 'react-router-dom';

import { formatBillDate, formatMoney } from '../../../../utils/utils';

import './Bill.css';
import IconExpand from './icon_expand.svg';

const Bill = ({ id, total, currency, rate, createdAt, history }) => {
    const { date, sum, type } = history[0];
    const sumClassName = `${ sum >= 0 ? 'positive' : 'negative' }`;

    return (
        <li className="bill">
            <NavLink to={ `/bills/${ id }` } className="bill__link">
                <img src={ IconExpand } alt="e"/>
            </NavLink>
            <h5 className="bill__number">Счет № { id }</h5>
            <h4 className="bill__total">{ formatMoney(total, false, currency) }</h4>
            <div className="bill__rate">{ rate }% годовых</div>
            <div className="bill__date">Создан: { formatBillDate(createdAt) }</div>
            <div className="bill__last-operation">
                { type }: { formatBillDate(date) }
                &nbsp;
                (<span className={ sumClassName }>
                    { formatMoney(sum, true, currency) }
                </span>)
            </div>
        </li>
    );
};

export default Bill;