import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = e => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = e => {
		e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate();
	};

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							className="text-input"
							placeholder="Search Expenses"
							value={this.props.filters.text}
							onChange={this.onTextChange}
						/>
					</div>
					<div className="input-group__item">
						<select
							className="select"
							value={this.props.filters.sortBy}
							onChange={this.onSortChange}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId={'1'}
							endDate={this.props.filters.endDate}
							endDateId={'2'}
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setTextFilter,
			sortByDate,
			sortByAmount,
			setStartDate,
			setEndDate,
		},
		dispatch
	);

const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExpenseListFilters);
