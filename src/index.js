import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import App from './components/App.component';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
