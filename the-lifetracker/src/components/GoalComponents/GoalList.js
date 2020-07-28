import React from 'react';
import Goal from './Goal';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

function GoalList(props) {
	useFirestoreConnect([ { collection: 'goals' } ]);

	const goals = useSelector((state) => state.firestore.ordered.goals);

	if (isLoaded(goals)) {
		return (
			<React.Fragment>
				<hr />
				{goals.map((goal) => {
					return <Goal goalName={goal.goalName} goalNotes={goal.goalLocation} id={goal.id} />;
				})}
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<br />
				<center>
					<Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
						You Have Nothing In Your List!!
					</Typography>
				</center>
			</React.Fragment>
		);
	}
}

export default GoalList;
