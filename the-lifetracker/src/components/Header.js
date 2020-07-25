import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Header() {
	let buttonText = null;
	return (
		<React.Fragment>
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
