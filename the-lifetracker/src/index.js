import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import 'firebase/auth';

const store = createStore(rootReducer);

const rrfProps = {
	firebase,
	config: {
		userProfile: 'users'
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps} />
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
