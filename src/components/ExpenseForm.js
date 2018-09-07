import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			category: props.expense ? props.expense.category : 'Food&Dining',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: '',
		};
	}

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => {
			return {
				description,
			};
		});
	};

	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => {
			return {
				note,
			};
		});
	};

	onAmountChange = e => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => {
				return {
					amount,
				};
			});
		}
	};

	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => {
				return {
					createdAt,
				};
			});
		}
	};

	onCategoryChange = e => {
		const category = e.target.value;
		this.setState(() => {
			return {
				category,
			};
		});
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => {
			return {
				calendarFocused: focused,
			};
		});
	};

	onSubmit = e => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({
				error: 'Please fill in description and amount',
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				category: this.state.category,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
			});
		}
	};

	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input
					type="text"
					className="text-input"
					placeholder="description"
					autoFocus
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>
				<input
					type="text"
					className="text-input"
					placeholder="amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<select className="select" value={this.state.category} onChange={this.onCategoryChange}>
					<option value="Food&Dining">Food & Dining</option>
					<option value="Entertainment">Entertainment</option>
					<option value="Shopping">Shopping</option>
					<option value="Health&Fitness">Health & Fitness</option>
					<option value="Bills&Utilities">Bills & Utilities</option>
					<option value="Auto&Transport">Auto & Transport</option>
					<option value="Travel">Travel</option>
					<option value="Kids">Kids</option>
					<option value="Gifts&Donations">Gifts & Donations</option>
					<option value="Taxes">Taxes</option>
				</select>
				<SingleDatePicker
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
					className="textarea"
					placeholder="Add a note for your expense"
					value={this.state.note}
					onChange={this.onNoteChange}
				/>
				<div>
					<button className="button">{this.props.expense ? 'Save Expense' : 'Add Expense'}</button>
				</div>
			</form>
		);
	}
}

export default ExpenseForm;
