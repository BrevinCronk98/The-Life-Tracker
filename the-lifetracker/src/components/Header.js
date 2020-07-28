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
		margin: theme.spacing(3, 50, 3)
	}
}));

function Header() {
	let HeaderText = null;
	const classes = useStyles();
	return (
		<React.Fragment>
			<center>
				<Typography variant="h6" color="inherit" noWrap>
					The Life Tracker
				</Typography>
			</center>
			<br />
			<Toolbar>
				<Container>
					<Grid item xs={1}>
						<center>
							<Button
								className={classes.mainGrid}
								id="todolist"
								href="#"
								color="primary"
								variant="outlined"
							>
								<Link style={{ textDecoration: 'none' }} to="/ToDo">
									To Do List
								</Link>
							</Button>
						</center>
					</Grid>
					<Grid item xs={1}>
						<Button className={classes.mainGrid} id="signin" href="#" color="primary" variant="outlined">
							Login
						</Button>
					</Grid>
					<Grid item xs={1}>
						<Button
							className={classes.mainGrid}
							align="center"
							id="signin"
							href="#"
							color="primary"
							variant="outlined"
						>
							<Link style={{ textDecoration: 'none' }} to="/Goals">
								Goals
							</Link>
						</Button>
					</Grid>
				</Container>
			</Toolbar>
			<hr />
		</React.Fragment>
	);
}

export default Header;
