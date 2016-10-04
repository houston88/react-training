import React from 'react';

export class ListOfColors extends React.Component {

	render() {

		return (
      <div>
        <h2 className='colors-header'>List of Colors</h2>
        <div className='colors-grid'>
          {this.props.colors.map(color =>
            <div style={{backgroundColor: color}} className='colors-item' key={color}>
              <div className='color'>{color}</div>
            </div>
          )}
        </div>
      </div>
    );
	}

}

ListOfColors.propTypes = {
  colors: React.PropTypes.arrayOf(React.PropTypes.string)
};
