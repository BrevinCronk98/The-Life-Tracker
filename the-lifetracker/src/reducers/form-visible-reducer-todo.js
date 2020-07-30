import * as c from './../actions/actionTypes';

export default (state = false, action) => {
	switch (action.type) {
		case c.TOGGLE_FORM_TODO:
			return !state;
		default:
			return state;
	}
};
