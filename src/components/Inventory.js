import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    // although the button for loading sample fishes is here
    // we have to create the loadSamples function where our state is created
    // because that's how the data from the sample data gets passed to the
    // components that use the data
    render() {
        return (
        	<div>
        		<h2>Inventory</h2>
        		<AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
        	</div>
        )
    }
}

export default Inventory;
