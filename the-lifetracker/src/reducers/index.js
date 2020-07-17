import formVisibleReducer from './form-visible-reducer';
import itemListReducer from './item-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'react-firestore';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	masterItemList: itemListReducer,
	firestore: firestoreReducer
});

export default rootReducer;
