import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	let buttonText = null;
	return (
		<React.Fragment>
			<div id="header">
				<h1>Welcome to Your To Do List!</h1>
				<h3 id="toDoGreet">Feel free to add to your to do list at any time!</h3>
				<h3 id="toDoGreet">We want to help you do what you need to do!</h3>
				<h3>Thank You For Using Life Tracker</h3>
			</div>
			<hr />
		</React.Fragment>
	);
}

export default Header;
