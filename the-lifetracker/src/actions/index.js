export const deleteItem = (id) => ({
	type: 'DELETE_TICKET',
	id
});

export const toggleForm = () => ({
	type: 'TOGGLE_FORM'
});

export const addItem = () => {
	const { itemName, itemLocation, itemDate, itemTime, itemNotes } = item;
	return {
		type: 'ADD_ITEM',
		itemName: itemName,
		itemLocation: itemLocation,
		itemDate: itemDate,
		itemTime: itemTime,
		itemNotes: itemNotes
	};
};
