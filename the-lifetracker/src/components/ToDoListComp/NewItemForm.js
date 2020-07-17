import React from 'react';
import ReusableForm from './ReusableForm';
import { useFireStore } from 'react-redux-firebase';

function NewItemForm(props) {
	const firestore = useFireStore();
	function addItemtoFirestore(event) {
		event.preventDefault();
		return firestore.collection('todolist').add({
			itemName: event.target.itemName.value,
			itemLocation: event.target.itemLocation.value,
			itemDate: event.target.itemDate.value,
			itemTime: event.target.itemTime.value,
			itemNotes: event.target.itemNotes.value
		});
	}
	return <ReusableForm buttonText="Add" />;
}

export default NewItemForm;
