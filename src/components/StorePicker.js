import React from 'react';
import {getFunName} from '../helpers';

/**
 * this.goToStore.bind(this)
 * What that does?
 * First of all, render() is a function related to the StorePicker class
 * that extends React.Component.
 * But the goToStore(event) method we create is not part of this
 * StorePicker class.
 * Therefore, we are telling StorePicker to use the method goToStore
 * and bounding it to the correct object of StorePicker.
 * `this` is so confusing!
 */

class StorePicker extends React.Component {
    // We can also use the constructor to bind the goToStore
    // event to the StorePicker class
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this)
	// }
	goToStore(event) {
		//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
		event.preventDefault(); //prevents reloading
		console.log("You have changed the url");
		// get text from the store input box
		const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        // transition from storepicket to the store
        // url changes to '/' to '/store/:storeId'
        // where storeId is storeInput.value
        this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return(
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				{/* TODO: connect events */}
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name"
					defaultValue={getFunName()}
					   ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store &#x27A1;</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
