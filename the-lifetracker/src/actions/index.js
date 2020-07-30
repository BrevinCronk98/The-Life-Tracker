export const deleteItem = (id) => ({
	type: 'DELETE_TICKET',
	id
});

export const toggleFormToDo = () => ({
	type: 'TOGGLE_FORM_TODO'
});

export const toggleFormGoals = () => ({
	type: 'TOGGLE_FORM_GOALS'
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
