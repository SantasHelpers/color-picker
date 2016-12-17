//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';


var ComplementaryBox = observer(class ComplementaryBox extends React.Component {

  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClick(this.props.color, this.props.lum);
  }

  render () {
    var hsl = hextohsl(this.props.color);
    var hex = hsltohex(hsl[0], hsl[1], this.props.lum);
    return (
        <div className="complementary-box" style={{'backgroundColor': hex}} onClick={this.handleClick.bind(this)}></div>
      );
  }
})

export default ComplementaryBox;