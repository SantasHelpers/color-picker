//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import { HEXtoRGB, RGBtoHSL, HSLtoRGB, RGBtoHex } from './colorCalcHelpers.js';


var ComplementaryBox = observer(class ComplementaryBox extends React.Component {

  constructor (props) {
    super (props);
    // this.state = {
    //   color: '#eaf2f8'
    // };
  }

  componentWillMount() {
    // var RGB = HEXtoRGB(colorStore.currentColor);
    // var HSL = RGBtoHSL(RGB);
    // HSL = [HSL[0], this.props.col, HSL[2]];
    // console.log('comp box HSL: ', HSL)
    // RGB = HSLtoRGB(HSL);
    // console.log('RGB Value: ', RGB);
    // var HEX = RGBtoHex(Math.round(RGB[0]), Math.round(RGB[1]), Math.round(RGB[2]));
    // console.log('ComplementaryBox 222: ', HEX)
    // this.setState({color: HEX});
  }

  render () {

    var RGB = HEXtoRGB(colorStore.complementary_a);
    var HSL = RGBtoHSL(RGB);
    HSL = [HSL[0], HSL[1], this.props.lum];
   // console.log('comp box HSL: ', HSL)
    RGB = HSLtoRGB(HSL);
  //  console.log('RGB Value: ', RGB);
    var HEX = RGBtoHex(Math.round(RGB[0]), Math.round(RGB[1]), Math.round(RGB[2]));
  //  console.log('ComplementaryBox 222: ', HEX)
  //  this.setState({color: HEX});
  

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