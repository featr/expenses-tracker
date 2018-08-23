import { combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

const rootReducer = combineReducers({ expenses: expensesReducer, filters: filtersReducer });

export default rootReducer;
