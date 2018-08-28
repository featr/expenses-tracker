import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="title">Expendiary</h1>
			<p>Track your expenses</p>
			<button className="button" onClick={startLogin}>
				Login with Google
			</button>
		</div>
	</div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ startLogin }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(LoginPage);
