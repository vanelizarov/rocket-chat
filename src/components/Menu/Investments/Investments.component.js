import React from 'react';
import Investment from './Investment/Investment.component';

import './Investments.css';

const Investments = ({ investments }) => (
    <ul className="investments">
        {
            investments.list.map((inv, index) => <Investment key={ inv.id } { ...inv }/>)
        }
    </ul>
);

export default Investments;