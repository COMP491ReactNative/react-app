import React from 'react';

class StorePicker extends React.Component {
	render() {
		return(
			<form className="store-selector">
				{/* TODO: connect events */}
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store &#x27A1;</button>
			</form>
		)
	}
}

export default StorePicker;
