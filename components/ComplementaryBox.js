//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';
import ntc from '../client/utils/ntc.js';


var ComplementaryBox = observer(class ComplementaryBox extends React.Component {

  constructor (props) {
    super (props);

  }


  render () {
    var hsl = hextohsl(this.props.color);
    var hex = hsltohex(hsl[0], hsl[1], this.props.lum);

    var name = ntc.name(this.props.color);

    console.log('test :', name);
    var style = {
      background : {
        backgroundColor: hex
      }
    };

    //console.log('complemantary-box : ', hex);

    return (
      <div className="complementary-box" style={style.background}></div>
      );
  }
})

export default ComplementaryBox;