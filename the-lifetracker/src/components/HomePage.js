import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ToDo from './../img/ToDoList.jpg';
import Goals from './../img/Goals.jpg';
import SignUp from './../img/SignUp.png';

function toDoSwitch() {
	window.location.assign('/ToDo');
}

function goalSwitch() {
	window.location.assign( '/Goals');
}

function signUpSwitch() {
	window.location.assign('/SignIn');
}

function HomePage() {
	return (
		<React.Fragment>
			<Container maxWidth="xs">
				<Typography variant="h2" style={{ textAlign: 'center', marginBottom: '5%' }}>
					Welcome To the Life Tracker!!
				</Typography>
			</Container>
			<Container>
				<Typography variant="h6" style={{ textAlign: 'center', marginBottom: '5%' }}>
					Thank you so much for using this application. I hope it helps you keep things straight in your life!
					Feel Free to browse around the app before signing in or signing up.
				</Typography>
			</Container>
			<center>
				<Grid item xs={12} md={3}>
					<input
						onClick={toDoSwitch}
						type="image"
						width="45%"
						src={ToDo}
						style={{ marginRight: '4%', borderRadius: '15px' }}
						class="btTxt submit"
					/>
					<input
						style={{ borderRadius: '15px' }}
						onClick={goalSwitch}
						type="image"
						src={Goals}
						width="48%"
						class="btTxt submit"
					/>
				</Grid>
				<br />
				<Grid item xs={12} md={3}>
					<input
						style={{ borderRadius: '15px', marginBottom: '23%' }}
						onClick={signUpSwitch}
						type="image"
						src={SignUp}
						width="45%"
						class="btTxt submit"
					/>
				</Grid>
			</center>
		</React.Fragment>
	);
}

export default HomePage;
