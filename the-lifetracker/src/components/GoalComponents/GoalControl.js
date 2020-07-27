import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Goal from './Goal';
import * as a from './../../actions';
import Button from '@material-ui/core/Button';

class GoalControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedGoal: null
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
}

GoalControl = connect(mapStateToProps)(GoalControl);

export default withFirestore(GoalControl);
