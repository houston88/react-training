import React from 'react';
import { CarViewRow } from './car-view-row';
import { CarEditRow } from './car-edit-row';

export class CarRows extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carEditId: ''
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }

  onEdit(carId) {
    // set state to cause rendering in edit mode
    console.log('Going into edit mode...');
    this.setState({
      carEditId: carId
    });
  }

  onSave(car) {
    // need to pass back up to state
    this.props.onSave(car);
    // clear edit mode
    this.setState({
      carEditId: ''
    });
  }

  onChecked(carId, checked) {
    this.props.onChecked(carId, checked);
  }

  // TIP: Use tertiary or case for conditions
	render() {
		return (
      <tbody>
        {this.props.cars.map(car => car.id === this.state.carEditId
          ?<CarEditRow key={car.id} car={car} colors={this.props.colors} onSave={this.onSave} />
          :<CarViewRow key={car.id} car={car} onEdit={this.onEdit} onChecked={this.onChecked} />)}
      </tbody>
    );
	}
}

CarRows.propTypes = {
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
