import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Typography, CardHeader } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		display: 'flex'
	}
});

function ItemDetail(props) {
	const { item } = props;
	const classes = useStyles();
	return (
		<React.Fragment>
			<center>
				<Container style={{ marginBottom: '3%' }} maxWidth={'md'}>
					<Card style={{ borderRadius: '25px' }} className={classes.card}>
						<CardMedia style={{ backgroundColor: 'lightblue' }} />
						<CardHeader title={item.itemName} subheader={item.itemDate} style={{ color: 'steelblue' }} />
						<hr style={{ color: 'lightblue' }} />

						<CardContent>
							<Typography variant="h5" style={{ color: 'steelblue' }}>
								Location: {item.itemLocation}
							</Typography>

							<Typography style={{ color: 'steelblue' }} variant="subtitle1" paragraph>
								Time: {item.itemTime}
							</Typography>
							<Typography style={{ color: 'steelblue' }} variant="subtitle1" paragraph>
								Notes: {item.itemNotes}
							</Typography>

							<Button
								onClick={() => props.onClickDelete(item.id)}
								style={{ marginBottom: '8%', marginRight: '2%' }}
								id="main-btn"
								variant="contained"
								color="primary"
							>
								Delete
							</Button>
							<Button
								onClick={props.onClickEdit}
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

ItemDetail.propTypes = {
	item: PropTypes.object,
	onClickDelete: PropTypes.func,
	onClickEdit: PropTypes.func
};

export default ItemDetail;
