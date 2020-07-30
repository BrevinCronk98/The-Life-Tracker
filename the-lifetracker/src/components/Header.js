import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import rootReducer from '../reducers/index';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
	mainGrid: {
		margin: theme.spacing(3.5, 3, 4)
	},
	root: {
		'& > .fa': {
			margin: theme.spacing(2)
		}
	}
}));

function doSignOut() {
	firebase
		.auth()
		.signOut()
		.then(function() {
			console.log('Successfully signed out!');
		})
		.catch(function(error) {
			console.log(error.message);
		});
}

function Header() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container id="header-container">
				<Box borderRadius="20px" id="header">
					<div>
						<center>
							<Container style={{ borderRadius: '15px', marginTop: '2%' }} id="header-sub" maxWidth="xs">
								<Typography id="header-text" variant="h3" noWrap>
									The Life Tracker
								</Typography>
							</Container>
						</center>
						<br />

						<Container maxWidth="md">
							<Toolbar style={{ marginLeft: '10%' }}>
								<Grid container spacing={5}>
									<Button id="todolist" href="#" color="primary" variant="contained">
										<Link style={{ textDecoration: 'none', color: 'white' }} to="/ToDo">
											To Do List
										</Link>
									</Button>
								</Grid>
								<Grid container spacing={5}>
									<Button
										onClick={doSignOut}
										id="todolist"
										href="#"
										color="primary"
										variant="contained"
									>
										Sign Out
									</Button>
								</Grid>
								<Grid container spacing={5}>
									<Button id="signin" href="#" color="primary" variant="contained">
										<Link style={{ textDecoration: 'none', color: 'white' }} to="/SignIn">
											Login
										</Link>
									</Button>
								</Grid>
								<Grid container spacing={5}>
									<Button id="signin" href="#" color="primary" variant="contained">
										<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
											Home
										</Link>
									</Button>
								</Grid>
								<Grid container spacing={5}>
									<Button id="signin" href="#" color="primary" variant="contained">
										<Link style={{ textDecoration: 'none', color: 'white' }} to="/Goals">
											Goals
										</Link>
									</Button>
								</Grid>
							</Toolbar>
						</Container>
					</div>
				</Box>
			</Container>

			<hr />
		</React.Fragment>
	);
}

export default Header;
