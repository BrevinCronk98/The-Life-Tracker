import React from 'react';
import ReusableForm from './ReusableForm';
import { useFireStore } from 'react-redux-firebase';
import PropTypes from 'prop-types';

function NewItemForm(props) {
	const firestore = useFireStore();
	function addItemtoFirestore(event) {
		event.preventDefault();
		props.onNewItemCreation();
		return firestore.collection('todolist').add({
			itemName: event.target.itemName.value,
			itemLocation: event.target.itemLocation.value,
			itemDate: event.target.itemDate.value,
			itemTime: event.target.itemTime.value,
			itemNotes: event.target.itemNotes.value
		});
	}
	return (
		<React.Fragment>
			<ReusableForm buttonText="Add" formSubmissionHandler={addItemtoFirestore} />;
		</React.Fragment>
	);
}

NewItemForm.propTypes = {
	onNewItemCreation: PropTypes.func
};

export default NewItemForm;
