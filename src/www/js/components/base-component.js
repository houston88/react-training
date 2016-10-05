import React from 'react';

export class BaseComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  // kinda nasty code to handle numbers...
  // browser dependent?
  onChange(e) {

    // debug
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.type === 'number'
        ? parseInt(e.target.value)
        : e.target.value
    });
  }

}
