//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';


var ComplementaryBox = observer(class ComplementaryBox extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    var hsl = hextohsl(colorStore.currentColor);
    var hex = hsltohex(hsl[0], hsl[1], this.props.lum);

    var style = {
      background : {
        backgroundColor: hex
      }
    };

    console.log('complemantary-box : ', hex);

    return (
      <div className="complemantary-box" style={style.background}></div>
      );
  }
})

export default ComplementaryBox;