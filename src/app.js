import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './actions/expenses';

import AppRouter from './routers/AppRouter';
import reducer from './store/configureStore';
import './firebase/firebase';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.querySelector('#app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.querySelector('#app'));
});
