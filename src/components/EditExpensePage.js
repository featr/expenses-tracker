import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onHandleRemove = () => {
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Expense</h1>
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
					<button className="button button--secondary" onClick={this.onHandleRemove}>
						Remove Expense
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ startEditExpense, startRemoveExpense }, dispatch);

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(expense => expense.id === props.match.params.id),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditExpensePage);
