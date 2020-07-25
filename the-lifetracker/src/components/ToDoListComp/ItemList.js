import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import 'fontsource-roboto';

function ItemList(props) {
	useFirestoreConnect([ { collection: 'todolist' } ]);

	const items = useSelector((state) => state.firestore.ordered.items);
	if (isLoaded(items)) {
		return (
			<React.Fragment>
				<hr />
				{items.map((item) => {
					return (
						<Item
							itemName={item.itemName}
							itemLocation={item.itemLocation}
							itemDate={item.itemDate}
							itemTime={item.itemTime}
							itemNotes={item.itemNotes}
							id={item.id}
						/>
					);
				})}
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<h3>You Have Nothing In Your list!</h3>
			</React.Fragment>
		);
	}
}

export default ItemList;
