export const deleteItem = (id) => ({
	type: 'DELETE_TICKET',
	id
});

export const toggleForm = () => ({
	type: 'TOGGLE_FORM'
});

export const updateTime = (id, formattedWaitTime) => ({
	type: 'UPDATE_TIME',
	id: id,
	formattedWaitTime: formattedWaitTime
});

export const getItemsSuccess = (items) => ({
	type: 'GET_ITEMS_SUCCESS',
	items
});

export const getItemsFailure = (error) => ({
	type: 'GET_ITEMS_FAILURE',
	error
});

export const toggleSwitch = () => ({
	type: 'TOGGLE_SWITCH'
});
