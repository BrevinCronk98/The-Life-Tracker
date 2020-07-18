import itemListReducer from '../../reducers/item-list-reducer';
import * as c from '../../actions/actionTypes';

describe('itemListReducer', () => {
	let action;
	const currentState = {
		1: {
			itemName: 'Run a Mile',
			itemLocation: 'Cushman Trail',
			itemDate: 'September 3rd, 2020',
			itemTime: '4:45 P.M.',
			itemNotes: 'Bring Water',
			id: 1
		},
		2: {
			itemName: 'Get Groceries',
			itemLocation: 'Safeway',
			itemDate: 'July 18th, 2020',
			itemTime: '4:45 P.M.',
			itemNotes: 'dont forget candy',
			id: 2
		}
	};

	const itemData = {
		itemName: 'Run a Mile',
		itemLocation: 'Cushman Trail',
		itemDate: 'September 3rd, 2020',
		itemTime: '4:45 P.M.',
		itemNotes: 'Bring Water',
		id: 1
	};

	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(itemListReducer({}, { type: null })).toEqual({});
	});

	// Test Two
	test('should successfully add new item data to masterItemList', () => {
		const { itemName, itemLocation, itemDate, itemTime, itemNotes, id } = itemData;
		action = {
			type: c.ADD_ITEM,
			itemName: itemName,
			itemLocation: itemLocation,
			itemDate: itemDate,
			itemTime: itemTime,
			itemNotes: itemNotes,
			id: id
		};
		expect(itemListReducer({}, action)).toEqual({
			[id]: {
				itemName: itemName,
				itemLocation: itemLocation,
				itemDate: itemDate,
				itemTime: itemTime,
				itemNotes: itemNotes,
				id: id
			}
		});
	});

	// Test Three
	test('Should successfully delete an item', () => {
		action = {
			type: c.DELETE_ITEM,
			id: 2
		};
		expect(itemListReducer(currentState, action)).toEqual({
			1: {
				itemName: 'Run a Mile',
				itemLocation: 'Cushman Trail',
				itemDate: 'September 3rd, 2020',
				itemTime: '4:45 P.M.',
				itemNotes: 'Bring Water',
				id: 1
			}
		});
	});
});
