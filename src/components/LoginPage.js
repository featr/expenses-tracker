import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div>
		<button onClick={startLogin}>Login</button>
	</div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ startLogin }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(LoginPage);
