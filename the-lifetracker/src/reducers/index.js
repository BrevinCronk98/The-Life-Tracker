import formVisibleReducerToDo from './form-visible-reducer-todo';
import formVisibleReducerGoals from './form-visible-reducer-goals';
import itemListReducer from './item-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import switchReducer from './switch-reducer';

const rootReducer = combineReducers({
	formVisibleOnPageToDo: formVisibleReducerToDo,
	formVisibleOnPageGoals: formVisibleReducerGoals,
	masterItemList: itemListReducer,
	firestore: firestoreReducer,
	isGoal: switchReducer
});

export default rootReducer;
