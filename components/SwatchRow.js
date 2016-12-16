import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import SwatchBox from './SwatchBox.js';

var SwatchRow = observer(class SwatchRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  handleClick() {

  }

  toggleHover() {

  }
//this.props.colorList
  render () {
    var colors = this.props.colorList;
    return (
      <div className="SwatchRow">
      {
      colors.map((color, index) =>
        <SwatchBox style={color} key={index} row={this.props.row} col={index} />
      )}
      </div>
    );
  }

});

export default SwatchRow;