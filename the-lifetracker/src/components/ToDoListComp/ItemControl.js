import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetails';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestroe, isLoaded } from 'react-redux-firebase';

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

	componentWillUnmount() {
		clearInterval(this.waitTimeUpdateTime);
    }
    
    
    handleClick = () =>
}
