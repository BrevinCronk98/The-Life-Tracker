import React from 'react';
import PropTypes from 'prop-types';

function GoalDetail(props) {
	const { goal } = props;

	return (
		<React.Fragment>
			<h1>Goal Detail</h1>
			<h3>{goal.goalName}</h3>
			<h3>{goal.goalNotes}</h3>
		</React.Fragment>
	);
}

GoalDetail.propTypes = {
	goal: PropTypes.object
};

export default GoalDetail;
