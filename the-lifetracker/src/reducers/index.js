import formVisibleReducer from './form-visible-reducer';
import itemListReducer from './item-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	masterItemList: itemListReducer,
	firestore: firestoreReducer,
	isGoal: false
});

export default rootReducer;
