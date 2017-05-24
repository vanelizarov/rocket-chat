import React, { Component } from 'react';
import createUUID from 'create-uuid';

import './Bills.css';
import Bill from './Bill/Bill.component';

class Bills extends Component {
    render() {

        const data = this.props.bills.list;

        return (
            <ul className="bills">
                {
                    data.map((b) => (
                        <Bill key={ createUUID(3) } { ...b } />
                    ))
                }
            </ul>
        )
    }
}

export default Bills;