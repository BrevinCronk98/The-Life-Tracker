import React from 'react';
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PostImgOne from '../img/PostImg1.webp';
import PostImgTwo from '../img/PostImgOne.jpg';
import PostImgThree from '../img/PostImgEight.jpg';
import PostImgFour from '../img/PostImgEleven.jpg';
import PostImgFive from '../img/PostImgFifteen.jpg';
import PostImgSix from '../img/PostImgFive.jpg';
import PostImgSeven from '../img/PostImgFour.jpg';
import PostImgEight from '../img/PostImgFourteen.jpg';
import PostImgNine from '../img/PostImgNine.jpg';
import PostImgTen from '../img/PostImgSeven.jpg';
import PostImgEleven from '../img/PostImgSix.jpg';
import PostImgTwelve from '../img/PostImgTen.jpg';
import PostImgThirteen from '../img/PostImgThirteen.jpg';
import PostImgFourteen from '../img/PostImgTwelve.webp';
import Hidden from '@material-ui/core/Hidden';

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

let num = Math.floor(Math.random() * imgArray.length);
let img = imgArray[num];

function HomePage() {
	return (
		<React.Fragment>
			<Container maxWidth="xs">
				<Typography variant="h2" style={{ textAlign: 'center', marginBottom: '5%' }}>
					Welcome To the Life Tracker!!
				</Typography>
			</Container>
			<Container>
				<Typography variant="h6" style={{ textAlign: 'center', marginBottom: '5%' }}>
					Thank you so much for using this application. I hope it helps you keep things straight in your life!
					Feel Free to browse around the app before signing in or signing up.
				</Typography>
			</Container>
			<center>
				<Grid item xs={12} md={3}>
					<Button style={{ marginBottom: '8%' }} id="main-btn" variant="contained" color="primary">
						Sign Up
					</Button>
					<Button style={{ marginBottom: '8%' }} id="main-btn" variant="contained" color="primary">
						To Do
					</Button>
				</Grid>
				<br />
				<Grid item xs={12} md={3}>
					<Button style={{ marginBottom: '8%' }} id="main-btn" variant="contained" color="primary">
						Goals
					</Button>
				</Grid>
			</center>
		</React.Fragment>
	);
}

export default HomePage;
