import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

function Header() {
	let buttonText = null;
	return (
		<React.Fragment>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					To Do List
				</Typography>

				<Button id="signin" href="#" color="primary" variant="outlined">
					Login
				</Button>
			</Toolbar>
			<Container maxWidth="sm" component="main">
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					The To Do List
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" component="p">
					This is where you can keep try of thing you need to do in your life! Thank you for using the To Do
					List!.
				</Typography>
			</Container>
		</React.Fragment>
	);
}

export default Header;
