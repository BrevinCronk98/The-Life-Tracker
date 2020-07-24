import React from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function EditItemForm(props) {
	const firestore = useFirestore();

	const { item } = props;

	function handleEditItemFormSubmission(event) {
		event.preventDefault();
		const propsToUpdate = {
			itemName: event.target.itemName.value,
			itemLocation: event.target.itemLocation.value,
			itemDate: event.target.itemDate.value,
			itemTime: event.target.itemTime.value,
			itemNotes: event.target.itemNotes.value
		};
		return firestore.update({ collection: 'todolist', doc: item.id }, propsToUpdate);
	}

	return (
		<React.Fragment>
			<ReusableForm buttonText="Update To Do Item" />
		</React.Fragment>
	);
}

export default EditItemForm;
