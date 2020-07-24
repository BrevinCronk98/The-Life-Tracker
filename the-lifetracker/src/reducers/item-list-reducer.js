import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
	const { formattedWaitTime, id } = action;
	switch (action.type) {
		case c.UPDATE_TIME:
			const newTicket = Object.assign({}, state[id], { formattedWaitTime });
			const updatedState = Object.assign({}, state, {
				[id]: newTicket
			});
			return updatedState;
		case c.DELETE_ITEM:
			const newState = { ...state };
			delete newState[id];
			return newState;
		default:
			return state;
	}
};
