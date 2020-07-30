import React from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types';

function NewItemForm(props) {
	const firestore = useFirestore();
	function addItemtoFirestore(event) {
		event.preventDefault();
		props.onNewItemCreate();
		return firestore.collection('todolist').add({
			itemName: event.target.itemName.value,
			itemLocation: event.target.itemLocation.value,
			itemDate: event.target.itemDate.value,
			itemTime: event.target.itemTime.value,
			itemNotes: event.target.itemNotes.value,
			TimeOpen: firestore.FieldValue.serverTimestamp()
		});
	}
	return (
		<React.Fragment>
			<ReusableForm buttonText="Add" formSubmissionHandler={addItemtoFirestore} />
		</React.Fragment>
	);
}

NewItemForm.propTypes = {
	onNewItemCreate: PropTypes.func
};

export default NewItemForm;
