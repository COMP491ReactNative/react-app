import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
// everything in React is a component.
// Even the router
const Root = () => {
	// Wrapping a div around the two Match tags as
	// JSx does not accept more than one tag
	// https://facebook.github.io/react/tips/maximum-number-of-jsx-root-nodes.html
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}
render(<Root/>, document.querySelector('#main'));
