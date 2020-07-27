import React from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function EditGoalForm(props) {
	const firestore = useFirestore();

	const { item } = props;

	function handleEditItemFormSubmission(event) {
		event.preventDefault();
		const propsToUpdate = {
			goalName: event.target.goalName.value,
			goalNotes: event.target.goalNotes.value
		};
		return firestore.update({ collection: 'todolist', doc: item.id }, propsToUpdate);
	}

	return (
		<React.Fragment>
			<ReusableForm buttonText="Update To Do Item" />
		</React.Fragment>
	);
}

export default EditGoalForm;
