import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import rootReducer from '../reducers/index';
import { Link } from 'react-router-dom';

function Header() {
	let HeaderText = null;
	return (
		<React.Fragment>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					The Life Tracker
				</Typography>
				<Button id="signin" href="#" color="primary" variant="outlined">
					<Link style={{ textDecoration: 'none' }} to="/ToDo">
						To Do List
					</Link>
				</Button>
				<Button id="signin" href="#" color="primary" variant="outlined">
					Login
				</Button>
				<Button id="signin" href="#" color="primary" variant="outlined">
					<Link style={{ textDecoration: 'none' }} to="/Goals">
						Goals
					</Link>
				</Button>
			</Toolbar>
		</React.Fragment>
	);
}

export default Header;
