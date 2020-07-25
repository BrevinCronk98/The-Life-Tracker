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
			<Container component="main" maxWidth="xs">
				<div id="form">
					<form onSubmit={props.formSubmissionHandler}>
						{/* Item Name */}
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									name="itemName"
									variant="outlined"
									required
									fullWidth
									id="itemName"
									label="To Do Item"
									autoFocus
								/>
							</Grid>

							{/* Item Location */}
							<Grid item xs={12} sm={6}>
								<TextField
									name="itemLocation"
									variant="outlined"
									required
									fullWidth
									id="itemLocation"
									label="Location"
									autoFocus
								/>
							</Grid>

							{/* Item Date */}
							<Grid item xs={12} sm={6}>
								<TextField
									name="itemDate"
									variant="outlined"
									required
									fullWidth
									id="itemDate"
									label="Date"
									autoFocus
								/>
							</Grid>

							{/*Item Time  */}
							<Grid item xs={12} sm={6}>
								<TextField
									name="itemTime"
									variant="outlined"
									required
									fullWidth
									id="itemTime"
									label="Time"
									autoFocus
								/>
							</Grid>

							{/* Item Notes */}
							<Grid item xs={12} sm={6}>
								<TextField
									name="itemNotes"
									variant="outlined"
									required
									fullWidth
									id="itemNotes"
									label="Notes"
									autoFocus
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
