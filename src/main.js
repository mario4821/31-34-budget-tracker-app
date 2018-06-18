import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './component/app/app';
import reducer from './reducer/main';
import session from './lib/redux-session';
import reporter from './lib/redux-reporter';

import './style/main.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(session, reporter)));

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<Provider store={store}><App/></Provider>, container);
