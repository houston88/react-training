import React from 'react';
import ReactDOM from 'react-dom';
// import {SimpleCalc} from './components/simple-calc';
import {Cars} from './components/cars';
import {ReduxCars} from './components/redux-cars';
import {ListOfColors} from './components/colors';

// styles
import '../css/styles.scss';

const colors = ['green','white','red','yellow','blue','orange','gold',
  'lime','silver','aqua','skyblue','violet','tomato','teal','tan','lightslategray'];

class App extends React.Component {

	render() {

		return (
			<div>
        {/* <SimpleCalc /> */}
        {/* <hr/> */}
				{/* <Cars colors={colors} /> */}
        <ReduxCars colors={colors} />
        <hr/>
				<ListOfColors colors={colors} />
			</div>
		);
	}

}

ReactDOM.render(<App />, document.querySelector('main'));
