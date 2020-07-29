import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Item from './Item';
import * as a from './../../actions';
import Button from '@material-ui/core/Button';

class ItemControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: null,
			editing: false
		};
	}

	componentDidMount() {
		console.log('component mounted');
	}

	componentDidUpdate() {
		console.log('component updated');
	}

	componentWillUnmount() {
		clearInterval(this.waitTimeUpdateTime);
	}

	handleDeletingItem = (id) => {
		this.props.firestore.delete({ collection: 'todolist', doc: id });
		this.setState({ selectedItem: null });
	};

	handleEditClick = () => {
		this.setState({ editing: true });
		console.log(this.state.editing);
	};

	handleFormClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleAddingNewItem = (newItem) => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleEditingItemInList = () => {
		this.setState({
			editing: false,
			selectedItem: null
		});
	};

	handleChangingSelectedItem = (id) => {
		this.componentWillReceiveProps.firestore.get({ collection: 'todolist', doc: id }).then((item) => {
			const firestoreItem = {
				itemName: item.get('itemName'),
				itemLocation: item.get('itemLocation'),
				itemDate: item.get('itemDate'),
				itemTime: item.get('itemTime'),
				itemNotes: item.get('itemNotes'),
				id: item.id
			};
			this.setState({ selectedItem: firestoreItem });
		});
	};

	handleDeletingItem = (id) => {
		this.props.firrestore.delete({ collection: 'todolist', doc: id });
		this.setState({ selectedItem: null });
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		let buttonFunc = null;
		if (this.props.formVisibleOnPage) {
			currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingItem} />;
			buttonText = 'Return To Your List';
			buttonFunc = this.handleFormClick;
		} else if (this.editing) {
			currentlyVisibleState = <EditItemForm item={this.state.selectedItem} />;
			buttonFunc = this.handleEditingItemInList;
		} else if (this.selectedItem != null) {
			currentlyVisibleState = (
				<ItemDetails
					item={this.state.selectedItem}
					onClickDelete={this.handleDeletingItem}
					onClickEdit={this.handleEditClick}
				/>
			);
		} else {
			currentlyVisibleState = (
				<ItemList itemList={this.props.masterItemList} onItemSelection={this.handleChangingSelectedItem} />
			);
			buttonText = 'Add Something';
			buttonFunc = this.handleFormClick;
		}
		return (
			<React.Fragment>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				{currentlyVisibleState}

				<center>
					<Button
						style={{ marginBottom: '8%' }}
						id="main-btn"
						variant="contained"
						color="primary"
						onClick={buttonFunc}
					>
						{buttonText}
					</Button>
				</center>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		formVisibleOnPage: state.formVisibleOnPage
	};
};

ItemControl.propTypes = {
	formVisibleOnPage: PropTypes.bool
};

ItemControl = connect(mapStateToProps)(ItemControl);

export default withFirestore(ItemControl);
