import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onHandleRemove = () => {
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
				<button onClick={this.onHandleRemove}>Remove Expense</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ editExpense, startRemoveExpense }, dispatch);

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(expense => expense.id === props.match.params.id),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditExpensePage);
