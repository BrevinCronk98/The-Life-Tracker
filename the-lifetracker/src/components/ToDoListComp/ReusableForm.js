import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
	return (
		<React.Fragment>
			<div id="form" onSubmit={props.formSubmissionHandler}>
				<form>
					{/* Item Name */}
					<label id="label" name="itemName">
						Enter your To Do Item:
					</label>
					<input id="input" type="text" name="itemName" placeholder="Enter your Item!" />
					<br />

					{/* Item Location */}
					<label id="label" name="itemLocation">
						Enter the Location:
					</label>
					<input id="input" type="text" name="itemLocation" placeholder="Enter the Location!" />
					<br />

					{/* Item Date */}
					<label id="label" name="itemDate">
						Enter the Date:
					</label>
					<input id="input" type="text" name="itemDate" placeholder="Enter the Date!" />
					<br />

					{/*Item Time  */}
					<label id="label" name="itemTime">
						Enter the Time of Day:
					</label>
					<input id="input" type="text" name="itemTime" placeholder="Enter the Time of Day!" />
					<br />

					{/* Item Notes */}
					<label id="label" name="itemNotes">
						Enter any Notes you may Have:
					</label>
					<input id="input" type="text" name="itemNotes" placeholder="Notes" />
					<br />

					<button id="ipt-btn" type="submit">
						{props.buttonText}
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	buttonText: PropTypes.string
};

export default ReusableForm;
