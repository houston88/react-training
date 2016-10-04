import React from 'react';
import ReactDOM from 'react-dom';
import {Cars} from './components/cars';
import {ListOfColors} from './components/colors';

import '../css/styles.scss';

const colors = ['green','white','red','yellow','blue','orange','gold',
  'lime','silver','aqua','skyblue','violet','tomato','teal','tan','lightslategray'];

class App extends React.Component {

	render() {

		return (
			<div>
				<Cars colors={colors} />
        <hr/>
				<ListOfColors colors={colors} />
			</div>
		);
	}

}

ReactDOM.render(<App />, document.querySelector('main'));
