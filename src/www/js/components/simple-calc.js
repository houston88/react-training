import React from 'react';
import {createStore, bindActionCreators} from 'redux';
import keyMirror from 'key-mirror';
import { BaseComponent } from './base-component';

// learning redux ********************
// ***********************************
const actionTypes = keyMirror({
    ADD: null,
    SUBTRACT: null
});
const createAddAction = value => ({
    type: actionTypes.ADD, value
});
const createSubtractAction = value => ({
    type: actionTypes.SUBTRACT, value
});
const actionCreators = {
    add: createAddAction,
    subtract: createSubtractAction
};
const reducer = (state = 0, action) => {
  switch(action.type) {
    case actionTypes.ADD:
      return state + action.value;
    case actionTypes.SUBTRACT:
      return state - action.value;
    default:
      return state;
  }
};
const store = createStore(reducer);
const actions = bindActionCreators(actionCreators, store.dispatch);
store.subscribe(() => {
    console.log(store.getState());
});
actions.add(1);
actions.subtract(2);
actions.add(3);
// end learning redux ****************
// ***********************************

export class SimpleCalc extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      result: 0
    };
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }

  componentDidMount() {
    this.storeUnsubscribe = store.subscribe(() => {
      this.setState({
          result: store.getState()
      });
    });
  }

  componentWillUnmount() {
    this.storeUnsubscribe();
  }

  add() {
    // this.setState({
    //   result: this.state.result + this.state.amount
    // });
    //store.dispatch({ type: 'ADD', value: this.state.amount });
    actions.add(this.state.amount);
  }

  sub() {
    // this.setState({
    //   result: this.state.result - this.state.amount
    // });
    //store.dispatch({ type: 'SUBTRACT', value: this.state.amount });
    actions.subtract(this.state.amount);
  }

	render() {
		return (
			<div className="calc">
        <button type="button" onClick={this.add}>
          <span className="icon icon-plus"></span>
        </button>
        <button type="button" onClick={this.sub}>
          <span className="icon icon-minus"></span>
        </button>
        <input type="number" id="amount"
          name="amount" onChange={this.onChange}
          value={this.state.amount} />
        <span>Result: {this.state.result}</span>
			</div>
		);
	}

}
