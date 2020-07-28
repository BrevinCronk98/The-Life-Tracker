import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import rootReducer from '../reducers/index';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	mainGrid: {
		margin: theme.spacing(3.5, 3, 4)
	}
}));

function Header() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<center>
				<Typography variant="h4" color="inherit" noWrap>
					The Life Tracker
				</Typography>
			</center>
			<br />
			<Container maxWidth="sm">
				<Toolbar>
					<Grid item xs={4}>
						<Button margin="5%" id="todolist" href="#" color="primary" variant="outlined">
							<Link style={{ textDecoration: 'none' }} to="/ToDo">
								To Do List
							</Link>
						</Button>
					</Grid>
					<Grid className={classes.mainGrid} item xs={4}>
						<Button id="signin" href="#" color="primary" variant="outlined">
							<Link style={{ textDecoration: 'none' }} to="/ToDo">
								Login
							</Link>
						</Button>
					</Grid>
					<Grid className={classes.mainGrid} item xs={4}>
						<Button id="signin" href="#" color="primary" variant="outlined">
							<Link style={{ textDecoration: 'none' }} to="/Goals">
								Goals
							</Link>
						</Button>
					</Grid>
				</Toolbar>
			</Container>
			<hr />
		</React.Fragment>
	);
}

export default Header;
