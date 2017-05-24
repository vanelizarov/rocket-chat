import React from 'react';
import './Avatar.css';
import Logo from '../../../../../logo.png';

const Avatar = ({ isOperation, url }) => (
    <img src={ url === undefined || url === '' ? Logo : url }
         alt=":("
         className={ isOperation ? 'avatar avatar_operation' : 'avatar' }/>
);

export default Avatar;