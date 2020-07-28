import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function ItemList(props) {
	useFirestoreConnect([ { collection: 'todolist' } ]);

	const items = useSelector((state) => state.firestore.ordered.todolist);

	if (isLoaded(items)) {
		return (
			<React.Fragment>
				<center>
					<Container style={{ borderRadius: '15px' }} id="listHeader" maxWidth="sm" component="main">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							The To Do List
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" component="p">
							This is where you can keep try of thing you need to do in your life! Thank you for using the
							To Do List!.
						</Typography>
					</Container>
				</center>

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
				<br />
				<center>
					<Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
						You Have Nothing In Your List!!
					</Typography>
				</center>
			</React.Fragment>
		);
	}
}

export default ItemList;
