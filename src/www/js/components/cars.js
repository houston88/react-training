import React from 'react';
import { BaseComponent } from './base-component';
import { CarsList } from './cars-list';
import { CarsForm } from './cars-form';

export class Cars extends React.Component {

  constructor(props) {
    super(props);
    this.baseId = 10;
    this.state = {
      cars: [],
      selectedCarIds: []
    };
    // bind once
    this.addCar = this.addCar.bind(this);
    this.saveCar = this.saveCar.bind(this);
    this.onChecked = this.onChecked.bind(this);
    this.deleteSelected = this.deleteSelected.bind(this);
  }

  loadData() {
    fetch('http://localhost:3010/cars').then(res => res.json())
      .then(cars => {
        // console.log(cars);
        this.setState({
          cars: cars
        });
      });
  }

  componentDidMount() {
    this.loadData();
  }

  /* If we wanted to pass props in again
  componentWillReceiveProps(nextProps) {
    this.setState({
      cars: nextProps.cars
    });
  }
  */

  // add car to state cars array
  addCar(car) {
    // OBE: increment id and set
    //this.baseId += 1;
    //car.id = this.baseId;
    // set state
    this.setState({
      cars: this.state.cars.concat(car)
    });
  }

  saveCar(car) {
    // save the edited car back into state
    console.log('Saving edit into state...');
    for(var i=0; i<this.state.cars.length; i++) {
      if (this.state.cars[i].id === car.id) {
        this.state.cars[i] = car;
      }
    }
    // save to state
    this.setState({
      cars: this.state.cars
    });
  }

  onChecked(carId, checked) {
    // set in state... we have a selected carId
    if (checked && this.state.selectedCarIds.indexOf(carId) == -1) {
      this.setState ({
        selectedCarIds: this.state.selectedCarIds.concat(carId)
      });
    } else {
      let removeIndex = this.state.selectedCarIds.indexOf(carId);
      this.state.selectedCarIds.splice(removeIndex,1);
      this.setState ({
        selectedCarIds: this.state.selectedCarIds
      });
    }
  }

  deleteSelected() {
    // remove selected carIds from our state
    let newCarList = [];
    let numToDelete = this.state.selectedCarIds.length;

    for (let i=0; i<this.state.selectedCarIds.length; i++) {
      let toDeleteId = this.state.selectedCarIds[i];
      fetch('http://localhost:3010/cars/'+toDeleteId, {
        method: 'DELETE',
        headers: new Headers({'Content-Type':'application/json'})
      })
      .then(res => {
        // success... Ideally would keep track of succesfully deleteSelected
        // and then just get from rest resource when done.
        numToDelete -= 1;
        console.log('Num left to delete: ' + numToDelete);
        if (numToDelete === 0) {
          this.setState({
            selectedCarIds: []
          });
          this.loadData();
        }
      });
    }

    /*
    for (let y=0; y<this.state.cars.length; y++) {
      // ensure not in delete id list
      if (this.state.selectedCarIds.indexOf(this.state.cars[y].id) == -1) {
        newCarList.push(this.state.cars[y]);
      }
    }
    // set to state to re-render, and clear selection
    this.setState({
      cars: newCarList,
      selectedCarIds: []
    });
    */

  }

	render() {
		return (
      <div className='car-content'>
        <CarsList cars={this.state.cars} colors={this.props.colors}
          onSave={this.saveCar}
          onChecked={this.onChecked} />
        <br/>
        {this.state.selectedCarIds.length
          ? <button type="button" onClick={this.deleteSelected}><span className="icon icon-bin2"></span> Delete Selected</button>
          : <span></span>}
        <CarsForm onAdd={this.addCar} colors={this.props.colors} />
      </div>
    );
	}

}

Cars.propTypes = {
  colors: React.PropTypes.array
};
