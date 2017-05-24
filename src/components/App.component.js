import React from 'react';

import './App.css';

import Chat from './Chat/Chat.component';
import Menu from './Menu/Menu.component';

const App = () => (
    <div className="app">
        <Chat/>
        <Menu/>
    </div>
);

export default App;