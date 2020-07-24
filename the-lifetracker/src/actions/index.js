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

export const requestItems = () => ({
	type: 'REQUEST_ITEMS'
});

export const makeApiCall = () => {
	return (dispatch) => {
		dispatch(requestItems);
		return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
			.then((response) => response.json())
			.then((jsonifiedResponse) => {
				dispatch(getItemsSuccess(jsonifiedResponse.results));
			})
			.catch((error) => {
				dispatch(getItemsFailure(error));
			});
	};
};
