import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Goal from './Goal';
import * as a from './../../actions';
import Button from '@material-ui/core/Button';
import NewGoalForm from './NewGoalForm';
import GoalList from './GoalList';
import GoalDetails from './GoalDetails';
import EditGoalForm from './EditGoalForm';

class GoalControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedGoal: null,
			editingGoal: false
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

	handleDeletingGoal = (id) => {
		this.props.firestore.delete({ collection: 'goals', doc: id });
		this.setState({ selectedGoal: null });
	};

	handleEditClick = () => {
		this.setState({ editingGoal: true });
		console.log('aSDGSadg' + this.state.editingGoal);
	};

	handleEditingGoalInList = () => {
		this.setState({
			editingGoal: false,
			selectedGoal: null
		});
	};

	handleDetailReturnClick = () => {
		if (this.state.selectedItem != null) {
			this.setState({
				selectedItem: null,
				editing: false
			});
		}
	};

	handleFormClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleFormGoals();
		dispatch(action);
	};

	handleAddingGoal = (newGoal) => {
		const { dispatch } = this.props;
		const action = a.toggleFormGoals();
		dispatch(action);
	};

	handleChangingSelectedGoal = (id) => {
		this.props.firestore.get({ collection: 'goals', doc: id }).then((goal) => {
			const firestoreGoal = {
				goalName: goal.get('goalName'),
				goalNotes: goal.get('goalNotes'),
				id: goal.id
			};
			this.setState({ selectedGoal: firestoreGoal });
			console.log(this.state.selectedGoal);
		});
	};
	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		let buttonFunc = null;
		if (this.props.formVisibleOnPageGoals) {
			currentlyVisibleState = <NewGoalForm onNewGoalCreation={this.handleAddingGoal} />;
			buttonText = 'Click Here To See the Rest of Your Goals';
			buttonFunc = this.handleFormClick;
		} else if (this.state.selectedGoal != null) {
			buttonText = 'Return to List';
			buttonFunc = this.handleDetailReturnClick;
			currentlyVisibleState = (
				<GoalDetails
					goal={this.state.selectedGoal}
					onClickDeleteGoal={this.handleDeletingGoal}
					onClickEditGoal={this.handleEditClick}
				/>
			);
		} else if (this.state.editingGoal) {
			buttonText = 'Return Home';
			currentlyVisibleState = (
				<EditGoalForm goal={this.state.selectedGoal} onEditGoal={this.handleEditingGoalInList} />
			);
			buttonFunc = this.handleEditingItemInList;
		} else {
			currentlyVisibleState = (
				<GoalList onGoalSelection={this.handleChangingSelectedGoal} goalList={this.props.masterGoalList} />
			);
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
		formVisibleOnPageGoals: state.formVisibleOnPageGoals
	};
};

GoalControl.propTypes = {
	formVisibleOnPageGoals: PropTypes.bool
};

GoalControl = connect(mapStateToProps)(GoalControl);

export default withFirestore(GoalControl);
