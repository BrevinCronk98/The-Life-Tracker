import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetails';
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
			selectedItem: null
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

	handleFormClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleAddingItem = (newItem) => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};
	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		let buttonFunc = null;
		if (this.props.formVisibleOnPage) {
			currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingItem} />;
			buttonText = 'Return To Your List';
			buttonFunc = this.handleFormClick;
		} else {
			currentlyVisibleState = <ItemList itemList={this.props.masterItemList} />;
			buttonText = 'Add Something';
			buttonFunc = this.handleFormClick;
		}
		return (
			<React.Fragment>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				{currentlyVisibleState}

				<center>
					<Button id="main-btn" variant="contained" color="primary" onClick={buttonFunc}>
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
