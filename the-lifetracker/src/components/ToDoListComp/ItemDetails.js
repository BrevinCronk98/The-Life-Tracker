import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function ItemDetail(props) {
	const { item } = props;

	return (
		<React.Fragment>
			<center>
				<h1>To Do Item Detail</h1>
				<h3>{item.itemName}</h3>
				<h3>{item.itemLocation}</h3>
				<h3>{item.itemDate}</h3>
				<h3>{item.itemTime}</h3>
				<h3>{item.itemNotes}</h3>
				<Button
					onClick={() => props.onClickDelete(item.id)}
					style={{ marginBottom: '8%' }}
					id="main-btn"
					variant="contained"
					color="primary"
				>
					Delete
				</Button>
				<Button
					onClick={props.onClickEdit}
					style={{ marginBottom: '8%' }}
					id="main-btn"
					variant="contained"
					color="primary"
				>
					Update
				</Button>
			</center>
		</React.Fragment>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.object,
	onClickDelete: PropTypes.func,
	onClickEdit: PropTypes.func
};

export default ItemDetail;
