import moment from 'moment';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
	const result = getExpensesTotal([]);
	expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
	const result = getExpensesTotal([expenses[0]]);
	expect(result).toBe(195);
});

test('should add multiple expenses correctly', () => {
	const result = getExpensesTotal(expenses);
	expect(result).toBe(118087);
});
