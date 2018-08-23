import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import reducer from './store/configureStore';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware)));

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.querySelector('#app')
);
