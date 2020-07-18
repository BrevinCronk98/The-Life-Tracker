import itemListReducer from '../../reducers/item-list-reducer';
import * as c from '../../actions/actionTypes';

describe('itemListReducer', () => {
	let actions;
	const currentState = {
		1: {
			itemName: 'Run a Mile',
			itemLocation: 'Cushman Trail',
			itemDate: 'September 3rd, 2020',
			itemTime: '4:45 P.M.',
			itemNotes: 'Bring Water'
		},
		2: {
			itemName: 'Get Groceries',
			itemLocation: 'Safeway',
			itemDate: 'July 18th, 2020',
			itemTime: '4:45 P.M.',
			itemNotes: 'dont forget candy'
		}
	};

	const itemData = {
		itemName: 'Run a Mile',
		itemLocation: 'Cushman Trail',
		itemDate: 'September 3rd, 2020',
		itemTime: '4:45 P.M.',
		itemNotes: 'Bring Water'
	};

	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(itemListReducer({}, { type: null })).toEqual({});
	});
});
