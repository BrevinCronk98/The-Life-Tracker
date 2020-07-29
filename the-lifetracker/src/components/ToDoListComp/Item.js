import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
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

let displayImg = () => {};

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
	let currentImg = null;

	let num = Math.floor(Math.random() * imgArray.length);
	let img = imgArray[num];

	return (
		<React.Fragment>
			<Typography align="center">
				<Container style={{}} maxWidth={'xs'}>
					<Paper>
						<Grid style={{ margin: '4%' }} container>
							<Grid item md={6}>
								<div id="itemList">
									<Typography component="h1" variant="h3" color="inherit" gutterBottom>
										{props.itemName}
									</Typography>

									<Typography variant="h5" color="inherit" paragraph>
										{props.itemLocation}
									</Typography>
									<Typography variant="h5" color="inherit" paragraph>
										{props.itemDate}
									</Typography>
									<Typography variant="h5" color="inherit" paragraph>
										{props.itemTime}
									</Typography>
									<Typography variant="h5" color="inherit" paragraph>
										{props.itemNotes}
									</Typography>
								</div>
							</Grid>
							<img src={img} width="55%" style={{ float: 'right' }} />
						</Grid>
					</Paper>
				</Container>
			</Typography>
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
