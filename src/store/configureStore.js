import { combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer,
	auth: authReducer,
});

export default rootReducer;
