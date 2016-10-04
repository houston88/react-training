import React from 'react';
import ReactDOM from 'react-dom';
import {Cars} from './components/cars';
import {ListOfColors} from './components/colors';

import '../css/styles.scss';

class App extends React.Component {

	render() {

		const colors = ['green','white','red','yellow','blue','orange','gold',
      'lime','silver','aqua','skyblue','violet','tomato','teal','tan','lightslategray'];
		const cars = [
      {id: 1, make: 'VW', model: 'Golf TDI', year: 2011, color: 'silver'},
      {id: 2, make: 'Chevy', model: 'Sierra', year: 2014, color: 'blue'},
      {id: 3, make: 'Tesla', model: 'Model S', year: 2015, color: 'red'},
      {id: 4, make: 'Ford', model: 'Fiesta', year: 2008, color: 'green'}
    ];

		return (
			<div>
				<Cars cars={cars} colors={colors} />
        <hr/>
				<ListOfColors colors={colors} />
			</div>
		);
	}

}

ReactDOM.render(<App />, document.querySelector('main'));
