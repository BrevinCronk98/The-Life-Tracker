import React from 'react';
import Header from './Header';
import ItemControl from './ToDoListComp/ItemControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GoalControl from './GoalComponents/GoalControl';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/Goals">
					<GoalControl />
				</Route>
				<Route path="/ToDo">
					<ItemControl />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
