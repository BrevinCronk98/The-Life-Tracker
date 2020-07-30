import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, CardHeader } from '@material-ui/core';
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
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
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
							<CardMedia>
								<img src={img} width="100%" />
							</CardMedia>
							<CardHeader
								title={props.itemName}
								subheader={props.itemDate}
								style={{ color: 'steelblue' }}
							/>
							<hr style={{ color: 'lightblue' }} />
							<div>
								<CardContent>
									<Typography variant="h5" style={{ color: 'steelblue' }}>
										Location: {props.itemLocation}
									</Typography>

									<Typography style={{ color: 'steelblue' }} variant="subtitle1" paragraph>
										Time: {props.itemTime}
									</Typography>
									<Typography style={{ color: 'steelblue' }} variant="subtitle1" paragraph>
										Notes: {props.itemNotes}
									</Typography>
								</CardContent>
								<Button
									style={{ backgroundColor: 'skyblue', color: 'white', marginBottom: '3%' }}
									onClick={() => props.whenItemClicked(props.id)}
								>
									View Details
								</Button>
							</div>
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
