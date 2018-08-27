import authReducer from '../../reducers/authReducer';

test('should set default state', () => {
	const state = authReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({});
});

test('should return id on login', () => {
	const action = {
		type: 'LOGIN',
		uid: 'abddba',
	};
	const state = authReducer(undefined, action);
	expect(state).toEqual({
		uid: 'abddba',
	});
});

test('should remove id on logout', () => {
	const action = {
		type: 'LOGOUT',
	};
	const state = authReducer({ uid: 'anything' }, action);
	expect(state).toEqual({});
});
