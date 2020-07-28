import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

function Item(props) {
	return (
		<React.Fragment>
			<Typography align="center">
				<Container>
					<div id="itemList">
						<h3>Item #: {props.id}</h3>
						<h3>To Do: {props.itemName}</h3>
						<h3>Location: {props.itemLocation}</h3>
						<h3>Date: {props.itemDate}</h3>
						<h3>Time: {props.itemTime}</h3>
						<h3>Notes: {props.itemNotes}</h3>
					</div>
				</Container>
			</Typography>
		</React.Fragment>
	);
}

Item.propTypes = {
	itemName: PropTypes.string,
	itemLocation: PropTypes.string,
	itemDate: PropTypes.string,
	itemTime: PropTypes.string,
	itemNotes: PropTypes.string,
	id: PropTypes.string
};

export default Item;
