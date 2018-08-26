import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startRemoveExpense, startEditExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
		/>
	);
});

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

// test('should handle editExpense', () => {
// 	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
// 	expect(history.push).toHaveBeenLastCalledWith('/');
// 	expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
// });

// test('should handle removeExpense', () => {
// 	wrapper.find('button').simulate('click');
// 	expect(history.push).toHaveBeenLastCalledWith('/');
// 	expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
// });
