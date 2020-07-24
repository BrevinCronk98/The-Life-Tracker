import React from 'react';
import Header from './Header';
import ItemControl from './ToDoListComp/ItemControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewItemForm from './ToDoListComp/NewItemForm';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/newitemform">
					<NewItemForm />
				</Route>
				<Route path="/">
					<ItemControl />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
