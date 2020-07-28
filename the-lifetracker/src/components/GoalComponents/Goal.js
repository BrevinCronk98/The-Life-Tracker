import React from 'react';
import PropTypes from 'prop-types';

function Goal(props) {
	return (
		<React.Fragment>
			<div id="itemList">
				<h3>Goal #: {props.id}</h3>
				<h3>What Goal Do You Want To Complete Today: {props.goalName}</h3>
				<h3>What Do You Need To Complete This Goal: {props.goalNotes}</h3>
			</div>
		</React.Fragment>
	);
}

Goal.propTypes = {
	goalName: PropTypes.string,
	goalNotes: PropTypes.string,
	id: PropTypes.string
};

export default Goal;
