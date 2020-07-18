import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
	const { itemName, itemLocation, itemDate, itemTime, itemNotes, id } = action;
	switch (action.type) {
		case c.ADD_ITEM:
			return Object.assign({}, state, {
				[id]: {
					itemName: itemName,
					itemLocation: itemLocation,
					itemDate: itemDate,
					itemTime: itemTime,
					itemNotes: itemNotes,
					id: id
				}
			});
		case c.DELETE_ITEM:
			const newState = { ...state };
			delete newState[id];
			return newState;
		default:
			return state;
	}
};
