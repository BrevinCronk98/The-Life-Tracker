import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function ReusableForm(props) {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField required id="itemName" name="itemName" label="To Do Item:" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField required id="itemLocation" name="itemLocation" label="Location:" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField required id="itemDate" name="itemDate" label="Date:" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField required id="itemTime" name="itemTime" label="Time: " fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField required id="itemNotes" name="itemNotes" label="Notes: " fullWidth />
				</Grid>
			</Grid>
			<Button id="form-btn" variant="contained" color="primary">
				{props.buttonText}
			</Button>
			<br />
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	buttonText: PropTypes.string
};
