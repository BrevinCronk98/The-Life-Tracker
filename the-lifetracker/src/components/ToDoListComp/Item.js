import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PostImgOne from '../../img/postimg2.jpg';

const imgArray = function() {};

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
									<img src={imgArray} width="20%" />
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
