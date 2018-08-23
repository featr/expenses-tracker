import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.addExpense(expense);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ addExpense: addExpense }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(AddExpensePage);
