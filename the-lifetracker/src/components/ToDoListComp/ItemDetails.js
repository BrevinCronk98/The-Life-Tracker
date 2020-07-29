import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function ItemDetail(props) {
	const { item } = props;

	return (
		<React.Fragment>
			<h1>item Detail</h1>
			<h3>{item.itemName}</h3>
			<h3>{item.itemLocation}</h3>
			<h3>{item.itemDate}</h3>
			<h3>{item.itemTime}</h3>
			<h3>{item.itemNotes}</h3>
			<Button style={{ marginBottom: '8%' }} id="main-btn" variant="contained" color="primary">
				Delete
			</Button>
			<Button style={{ marginBottom: '8%' }} id="main-btn" variant="contained" color="primary">
				Update
			</Button>
		</React.Fragment>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.object
};

export default ItemDetail;
