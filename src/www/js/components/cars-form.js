import React from 'react';
import { BaseComponent } from './base-component';

export class CarsForm extends BaseComponent {

  constructor(props) {
    super(props);
    this.baseId = 10;
    this.state = {
      make: '',
      model: '',
      year: 2016,
      color: this.props.colors.concat()[0]
    };
    // bind once
    this.addCar = this.addCar.bind(this);
  }

  // add car to state cars array
  addCar(e) {
    this.props.onAdd(this.state);
    // clear form
    this.setState({
      make: '',
      model: '',
      year: 2016,
      color: ''
    });
  }

  // to dangerously set inner html. Do not do this! In elem:
  // dangerouslySetInnerHTML={({ __html: labelText })}

	render() {
		return (
      <form className='carsForm'>
        <h3>Add Car</h3>
        <div className="formControl">
          <label htmlFor="new-make">Make:</label>
          <input type="text" id="new-make"
            name="make"
            onChange={this.onChange}
            value={this.state.make} />
        </div>
        <div className="formControl">
          <label htmlFor="new-model">Model:</label>
          <input type="text" id="new-model"
            name="model"
            onChange={this.onChange}
            value={this.state.model} />
        </div>
        <div className="formControl">
          <label htmlFor="new-year">Year:</label>
          <input type="number" id="new-year"
            name="year"
            onChange={this.onChange}
            value={this.state.year} />
        </div>
        <div className="formControl">
          <label htmlFor="new-color">Color:</label>
          <select id="new-color" name="color" onChange={this.onChange}>
            {this.props.colors.map(color =>
              <option key={color} value={color}>
                {color}
              </option>
            )}
          </select>
        </div>
        <button type="button" onClick={this.addCar}>Add Car</button>
      </form>
    );
	}

}

CarsForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  colors: React.PropTypes.arrayOf(React.PropTypes.string)
};
