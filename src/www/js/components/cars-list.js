import React from 'react';
import { CarRows } from './car-rows';

export class CarsList extends React.Component {

  constructor(props) {
    super(props);
    // to pass up to cars list
    this.onSave = this.onSave.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }

  onSave(car) {
    // pass up
    this.props.onSave(car);
  }

  onChecked(carId) {
    this.props.onChecked(carId, checked);
  }

	render() {
		return (
      <div className='carsList'>
        <h2 className='table-header'>Car List</h2>
        <table>
          <thead>
            <tr>
              <th style={{width:'25px',textAlign:'center'}}></th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <CarRows cars={this.props.cars} onSave={this.onSave}
            colors={this.props.colors}
            onChecked={this.props.onChecked} />
        </table>
      </div>
    );
	}
}

CarsList.propTypes = {
  cars: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      make: React.PropTypes.string.isRequired,
      mode: React.PropTypes.string,
      year: React.PropTypes.number,
      color: React.PropTypes.string
    })).isRequired,
  colors: React.PropTypes.arrayOf(React.PropTypes.string),
  onSave: React.PropTypes.func.isRequired
};
