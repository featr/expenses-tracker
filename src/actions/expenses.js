import uuid from 'uuid';
import database from '../firebase/firebase';

const addExpense = expense => {
	return {
		type: 'ADD_EXPENSE',
		expense,
	};
};

export const startAddExpense = (expenseData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			description = '',
			note = '',
			amount = 0,
			category = 'Food&Dining',
			createdAt = 0,
		} = expenseData;
		const expense = { description, note, amount, category, createdAt };
		return database
			.ref(`users/${uid}/expenses`)
			.push(expense)
			.then(ref => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense,
					})
				);
			});
	};
};

const removeExpense = ({ id } = {}) => {
	return {
		type: 'REMOVE_EXPENSE',
		id,
	};
};

export const startRemoveExpense = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses`)
			.remove()
			.then(() => {
				dispatch(removeExpense({ id }));
			});
	};
};

const editExpense = (id, updates) => {
	return {
		type: 'EDIT_EXPENSE',
		id,
		updates,
	};
};

export const startEditExpense = (id, updateData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.update(updateData)
			.then(() => {
				dispatch(editExpense(id, updateData));
			});
	};
};

export const setExpenses = expenses => ({
	type: 'SET_EXPENSES',
	expenses,
});

export const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses`)
			.once('value')
			.then(snapshot => {
				const expenses = [];

				snapshot.forEach(childSnapshot => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});
				dispatch(setExpenses(expenses));
			});
	};
};

export { addExpense, removeExpense, editExpense };
