import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/dashboard" activeClassName="is-active">
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Add Expense
		</NavLink>
		<button onClick={startLogout}>Logout</button>
	</header>
);

const mapDispatchToProps = dispatch => bindActionCreators({ startLogout }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(Header);
