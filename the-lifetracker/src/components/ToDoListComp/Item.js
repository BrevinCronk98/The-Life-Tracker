import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
	return (
		<React.Fragment>
			<div id="itemList">
				<h3>To Do: {props.itemName}</h3>
				<h3>Location: {props.itemLocation}</h3>
				<h3>Date: {props.itemDate}</h3>
				<h3>Time: {props.itemTime}</h3>
				<h3>Notes: {props.itemNotes}</h3>
			</div>
		</React.Fragment>
	);
}

Item.propTypes = {
	itemName: PropTypes.string,
	itemLocation: PropTypes.string,
	itemDate: PropTypes.string,
	itemTime: PropTypes.string,
	itemNotes: PropTypes.string
};

export default Item;
