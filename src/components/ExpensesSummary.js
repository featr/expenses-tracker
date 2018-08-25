import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/visibleExpenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const expensesAmount = numeral(expensesTotal / 100).format('$0,0.00');

	return (
		<div>
			<p>
				Viewing {expenseCount} {expenseWord} totalling {expensesAmount}
			</p>
		</div>
	);
};

const mapStateToProps = state => ({
	expenseCount: selectExpenses(state.expenses, state.filters).length,
	expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters)),
});

export default connect(mapStateToProps)(ExpensesSummary);
