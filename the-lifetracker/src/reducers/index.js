import formVisibleReducer from './form-visible-reducer';
import itemListReducer from './item-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import switchReducer from './switch-reducer';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	masterItemList: itemListReducer,
	firestore: firestoreReducer,
	isGoal: switchReducer
});

export default rootReducer;
