import React from 'react';
import { BaseComponent } from './base-component';

export class CarEditRow extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.car.id,
      make: this.props.car.make,
      model: this.props.car.model,
      year: this.props.car.year,
      color: this.props.car.color
    };
    this.save = this.save.bind(this);
  }

  save() {
    fetch('http://localhost:3010/cars/'+this.state.id, {
      method: 'PUT',
      headers: new Headers({'Content-Type':'application/json'}),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(results => {
      console.log('Put (updates) new car... ' + results);
      // succes, send up the chain
      this.props.onSave(results);
    });
  }

  // use this along with ref to do a focus
  componentDidMount() {
    this.editMakeElem.focus();
  }

	render() {
		return (
      <tr>
        <td></td>
        <td>
          <input type="text" id="new-make"
            name="make"
            onChange={this.onChange}
            value={this.state.make}
            ref={input => this.editMakeElem = input} />
        </td>
        <td>
          <input type="text" id="new-model"
            name="model"
            onChange={this.onChange}
            value={this.state.model} />
        </td>
        <td>
          <input type="number" id="new-year"
            name="year"
            onChange={this.onChange}
            value={this.state.year} />
        </td>
        <td>
          <select id="new-color" name="color" value={this.state.color} onChange={this.onChange}>
            {this.props.colors.map(color =>
              <option key={color} value={color}>
                {color}
              </option>
            )}
          </select>
        </td>
        <td><button type='button' onClick={this.save} className='save'>Save</button></td>
      </tr>
    );
	}
}

CarEditRow.propTypes = {
  car: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      make: React.PropTypes.string.isRequired,
      mode: React.PropTypes.string,
      year: React.PropTypes.number,
      color: React.PropTypes.string
    }).isRequired,
  onSave: React.PropTypes.func.isRequired,
  colors: React.PropTypes.arrayOf(React.PropTypes.string)
};
