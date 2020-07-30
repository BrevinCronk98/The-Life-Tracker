import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Typography, CardHeader, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		display: 'flex'
	}
});

function GoalDetail(props) {
	const { goal } = props;

	const classes = useStyles();
	return (
		<React.Fragment>
			<center>
				<Container style={{ marginBottom: '3%' }} maxWidth={'md'}>
					<Card style={{ borderRadius: '25px' }} className={classes.card}>
						<CardMedia style={{ backgroundColor: 'lightblue' }} />
						<CardHeader title={goal.goalName} style={{ color: 'steelblue' }} />
						<hr style={{ color: 'lightblue' }} />

						<CardContent>
							<Typography style={{ color: 'steelblue' }} variant="subtitle1" paragraph>
								Notes: {goal.goalNotes}
							</Typography>

							<Button
								onClick={() => props.onClickDeleteGoal(goal.id)}
								style={{ marginBottom: '8%', marginRight: '2%' }}
								id="main-btn"
								variant="contained"
								color="primary"
							>
								Delete
							</Button>
							<Button
								onClick={props.onClickEditGoal}
								style={{ marginBottom: '8%' }}
								id="main-btn"
								variant="contained"
								color="primary"
							>
								Update
							</Button>
						</CardContent>
					</Card>
				</Container>
			</center>
		</React.Fragment>
	);
}

GoalDetail.propTypes = {
	goal: PropTypes.object,
	onClickDeleteGoal: PropTypes.func,
	onClickEditGoal: PropTypes.func
};

export default GoalDetail;
