//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import { HEXtoRGB, RGBtoHSL, HSLtoRGB, RGBtoHex } from './colorCalcHelpers.js';


var ComplementaryBox = observer(class ComplementaryBox extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    var RGB = HEXtoRGB(colorStore.complementary_a);
    var HSL = RGBtoHSL(RGB);
    HSL = [HSL[0], HSL[1], this.props.lum];
    RGB = HSLtoRGB(HSL);
    var HEX = RGBtoHex(Math.round(RGB[0]), Math.round(RGB[1]), Math.round(RGB[2]));
    console.log('Complementary Box - store valye', colorStore.complementary_a);
    console.log('ComplementaryBox 222: ', HEX);

    console.log(colorStore.complimentary);

  

    var style = {
      background : {
        backgroundColor: HEX
      }
    };

    console.log('complemantary-box : ', HEX);

    // turn everything to HSL and look at the L value
    // keep H and S and change the L value

    return (
      <div className="complemantary-box" style={style.background}></div>
      );
  }
})

export default ComplementaryBox;