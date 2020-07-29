import React from 'react';
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FormControl } from '@material-ui/core';

function Signin() {
	function doSignUp(event) {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function() {
				console.log('Successfully Signed Up');
			})
			.catch(function(error) {
				console.log(error.message, 'help');
			});
	}
	return (
		<React.Fragment>
			<Container maxWidth="xs">
				<Typography variant="h2" style={{ textAlign: 'center', marginBottom: '5%' }}>
					Sign Up
				</Typography>
				<form onSubmit={doSignUp}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								name="email"
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Enter Your Email"
								autoFocus
								style={{ backgroundColor: 'lightblue' }}
							/>
						</Grid>

						{/* Item Location */}
						<Grid item xs={12} sm={6}>
							<TextField
								name="password"
								variant="outlined"
								required
								fullWidth
								id="password"
								label="Enter a Password"
								autoFocus
								style={{ backgroundColor: 'lightblue' }}
							/>
						</Grid>
					</Grid>

					<Grid style={{ marginTop: '7%', backgroundPosition: 'center' }} item xs={4}>
						<Button
							type="submit"
							onSubmit={console.log('help')}
							style={{ backgroundPosition: 'center' }}
							id="signin"
							color="primary"
							variant="contained"
						>
							Sign Up
						</Button>
					</Grid>
				</form>
			</Container>
		</React.Fragment>
	);
}

export default Signin;
