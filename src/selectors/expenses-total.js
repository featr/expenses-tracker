const getExpensesTotal = expenses => {
	return expenses
		.map(expense => expense.amount)
		.reduce((sum, currentValue) => sum + currentValue, 0);
};
export default getExpensesTotal;
