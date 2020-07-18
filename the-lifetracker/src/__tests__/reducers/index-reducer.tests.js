import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import { firestoreReducer } from 'react-redux-firebase';

let store = createStore(rootReducer);
describe('rootReducer', () => {
	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			masterItemList: {},
			formVisibleOnPage: false,
			firestore: any
		});
	});
});
