import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PostImgOne from '../../img/PostImg1.webp';
import PostImgTwo from '../../img/PostImgOne.jpg';
import PostImgThree from '../../img/PostImgEight.jpg';
import PostImgFour from '../../img/PostImgEleven.jpg';
import PostImgFive from '../../img/PostImgFifteen.jpg';
import PostImgSix from '../../img/PostImgFive.jpg';
import PostImgSeven from '../../img/PostImgFour.jpg';
import PostImgEight from '../../img/PostImgFourteen.jpg';
import PostImgNine from '../../img/PostImgNine.jpg';
import PostImgTen from '../../img/PostImgSeven.jpg';
import PostImgEleven from '../../img/PostImgSix.jpg';
import PostImgTwelve from '../../img/PostImgTen.jpg';
import PostImgThirteen from '../../img/PostImgThirteen.jpg';
import PostImgFourteen from '../../img/PostImgTwelve.webp';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		display: 'flex'
	}
});

function Item(props) {
	const imgArray = [
		PostImgOne,
		PostImgTwo,
		PostImgThree,
		PostImgFour,
		PostImgFive,
		PostImgSix,
		PostImgSeven,
		PostImgEight,
		PostImgNine,
		PostImgTen,
		PostImgEleven,
		PostImgTwelve,
		PostImgThirteen,
		PostImgFourteen
	];

	const classes = useStyles;
	let num = Math.floor(Math.random() * imgArray.length);
	let img = imgArray[num];

	return (
		<React.Fragment>
			<center>
				<Grid style={{ float: 'center', margin: '3%', borderRadius: '25px' }} item xs={12} md={3}>
					<CardActionArea component="a" href="#">
						<Card style={{ borderRadius: '25px' }} className={classes.card}>
							<div>
								<CardContent>
									<Typography component="h2" variant="h5">
										{props.itemName}
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										{props.itemLocation}
									</Typography>
									<Typography variant="subtitle1" paragraph>
										{props.itemDate}
									</Typography>
									<Typography variant="subtitle1" paragraph>
										{props.itemTime}
									</Typography>
									<Typography variant="subtitle1" paragraph>
										{props.itemNotes}
									</Typography>
								</CardContent>
								<Button onClick={() => props.whenItemClicked(props.id)}>View Details</Button>
							</div>

							<Hidden xsDown />
						</Card>
					</CardActionArea>
				</Grid>
			</center>
		</React.Fragment>
	);
}

Item.propTypes = {
	itemName: PropTypes.string,
	itemLocation: PropTypes.string,
	itemDate: PropTypes.string,
	itemTime: PropTypes.string,
	itemNotes: PropTypes.string,
	id: PropTypes.string
};

export default Item;
