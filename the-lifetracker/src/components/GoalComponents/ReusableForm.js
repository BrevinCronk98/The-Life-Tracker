import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	mainBtn: {
		margin: theme.spacing(3, 21, 2)
	}
}));

function ReusableForm(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<br />
			<Container component="main" maxWidth="xs">
				<div id="form">
					<form onSubmit={props.formSubmissionHandler}>
						{/* Goal Name */}
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									name="goalName"
									variant="outlined"
									required
									fullWidth
									id="itemName"
									label="What Goal Do You Want To Achieve"
									autoFocus
									style={{ backgroundColor: 'lightblue' }}
								/>
							</Grid>

							{/* Goal Notes */}
							<Grid item xs={12} sm={6}>
								<TextField
									name="goalNotes"
									variant="outlined"
									required
									fullWidth
									id="goalNotes"
									label="Anything You Need To Bring?"
									autoFocus
									style={{ backgroundColor: 'lightblue' }}
								/>
							</Grid>
						</Grid>
						<br />

						<Button
							className={classes.mainBtn}
							id="form-btn"
							type="submit"
							variant="contained"
							color="primary"
						>
							{props.buttonText}
						</Button>
					</form>
					<br />
				</div>
			</Container>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	buttonText: PropTypes.string
};

export default ReusableForm;
