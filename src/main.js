import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './component/app/app';
import categoryReducer from './reducer/category';

import './style/main.scss';

const middleware = {};
const store = createStore(categoryReducer, composeWithDevTools(applyMiddleware(...middleware)));

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<Provider store={store}><App/></Provider>, container);
