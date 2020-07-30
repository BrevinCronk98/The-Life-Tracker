import React from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types';

function NewGoalForm(props) {
	const firestore = useFirestore();
	function addItemtoFirestore(event) {
		event.preventDefault();
		props.onNewGoalCreation();
		return firestore.collection('goals').add({
			goalName: event.target.goalName.value,
			goalNotes: event.target.goalNotes.value
		});
	}
	return (
		<React.Fragment>
			<ReusableForm buttonText="Add" formSubmissionHandler={addItemtoFirestore} />
		</React.Fragment>
	);
}

NewGoalForm.propTypes = {
	onNewGoalCreation: PropTypes.func
};

export default NewGoalForm;
