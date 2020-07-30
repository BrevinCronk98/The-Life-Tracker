import React from 'react';
import Goal from './Goal';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function GoalList(props) {
	useFirestoreConnect([ { collection: 'goals' } ]);

	const goals = useSelector((state) => state.firestore.ordered.goals);

	if (isLoaded(goals)) {
		return (
			<React.Fragment>
				<center>
					<Container maxWidth="sm" component="main">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Your Goals!
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" component="p">
							This is the place to keep track of daily goals! Remember roadblocks don't mean failure, keep
							pursuing. Make your goals meaningful to you!
						</Typography>
					</Container>
				</center>
				<hr />
				{goals.map((goal) => {
					return (
						<Goal
							WhenGoalClicked={props.onGoalSelection}
							goalName={goal.goalName}
							goalNotes={goal.goalNotes}
							id={goal.id}
						/>
					);
				})}
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<br />
				<center>
					<Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
						Loading...
					</Typography>
				</center>
			</React.Fragment>
		);
	}
}

export default GoalList;
