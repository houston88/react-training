import React from 'react';

export class CarViewRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
    this.editMode = this.editMode.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }

  editMode() {
    this.props.onEdit(this.props.car.id);
  }

  onChecked(e) {
    this.setState({
        isChecked: e.target.checked
    });
    this.props.onChecked(this.props.car.id, e.target.checked);
  }

	render() {
		return (
      <tr>
        <td>
          <input type="checkbox" id="delete" name="isChecked"
            checked={this.state.isChecked} onChange={this.onChecked}/>
         </td>
        <td>{this.props.car.make}</td>
        <td>{this.props.car.model}</td>
        <td>{this.props.car.year}</td>
        <td style={{color:this.props.car.color}}>{this.props.car.color}</td>
        <td>
          <button type='button' onClick={this.editMode} className='edit'>
            <span className="icon icon-bin2"></span> Edit
          </button>
        </td>
      </tr>
    );
	}
}

CarViewRow.propTypes = {
  car: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      make: React.PropTypes.string.isRequired,
      mode: React.PropTypes.string,
      year: React.PropTypes.number,
      color: React.PropTypes.string
    }).isRequired,
  onEdit: React.PropTypes.func.isRequired
};
