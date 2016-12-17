//MonoChromeBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';


var MonoChromeBox = observer(class MonoChromeBox extends React.Component {

  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClick(this.props.color, this.props.lum);
  }

  render () {
    return (
        <div className="complementary-box" style={{'backgroundColor': this.props.color}} onClick={this.handleClick.bind(this)}></div>
      );
  }
})

export default MonoChromeBox;