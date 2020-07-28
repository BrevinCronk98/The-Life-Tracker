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

	isGoal() {
		return (this.props.isGoal = !this.props.isGoal);
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

	handleDeletingGoal = (id) => {
		this.props.firestore.delete({ collection: 'goals', doc: id });
		this.setState({ selectedItem: null });
	};

	handleFormClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleAddingGoal = (newGoal) => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};
	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		let buttonFunc = null;
		if (this.props.isGoal) {
			currentlyVisibleState = <NewGoalForm onNewGoalCreation={this.handleAddingGoal} />;
			buttonText = 'Click Here To See the Rest of Your Goals';
			buttonFunc = this.handleFormClick;
		} else {
			currentlyVisibleState = <GoalList goalList={this.props.masterGoalList} />;
			buttonText = 'Create a Goal!!';
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

GoalControl.propTypes = {
	formVisibleOnPage: PropTypes.bool
};

GoalControl = connect(mapStateToProps)(GoalControl);

export default withFirestore(GoalControl);
