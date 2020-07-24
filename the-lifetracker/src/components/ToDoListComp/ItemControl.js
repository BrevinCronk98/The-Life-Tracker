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

class ItemControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: null
		};
	}

	componentDidMount() {
		this.waitTimeUpdateTime = setInterval(() => this.updateItemElapsedWaitTime(), 60000);
	}

	componentDidUpdate() {
		console.log('component updated');
	}

	componentWillUnmount() {
		clearInterval(this.waitTimeUpdateTime);
	}

	handleDeletingTicket = (id) => {
		this.props.firestore.delete({ collection: 'todolist', doc: id });
		this.setState({ selectedItem: null });
	};

	handleFormClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleAddingItem = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};
	render() {
		let currentlyVisibleState = null;
		if (this.props.formVisibleOnPage) {
			currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingItem} />;
		} else {
			return (currentlyVisibleState = <ItemList />);
		}
		return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
	}
}

const mapStateToProps = (state) => {
	return {
		masterItemList: state.masterItemList,
		formVisibleOnPage: state.formVisibleOnPage
	};
};

ItemControl.propTypes = {
	masterItemList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool,
	selectedItem: PropTypes.object
};

ItemControl = connect(mapStateToProps)(ItemControl);

export default withFirestore(ItemControl);
