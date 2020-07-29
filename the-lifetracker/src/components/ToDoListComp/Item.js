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
let displayImg = () => {
	for (let i = 0; i < imgArray.length; i++) {
		console.log(currentImg);
		return (currentImg = Math.floor(Math.random * imgArray.length));
	}
};

function Item(props) {
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
									<img src={displayImg} />
								</div>
							</Grid>
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
