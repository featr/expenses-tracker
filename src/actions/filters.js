const setTextFilter = (text = '') => {
	return {
		type: 'SET_TEXT_FILTER',
		text,
	};
};

const sortByDate = () => {
	return {
		type: 'SORT_BY_DATE',
	};
};

const sortByAmount = () => {
	return {
		type: 'SORT_BY_AMOUNT',
	};
};

const setStartDate = startDate => {
	return {
		type: 'SET_START_DATE',
		startDate,
	};
};

const setEndDate = endDate => {
	return {
		type: 'SET_END_DATE',
		endDate,
	};
};

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };
