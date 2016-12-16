//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';
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

    var hsl = hextohsl(colorStore.currentColor);
    var hex = hsltohex(hsl[0], hsl[1], this.props.lum);


    // var RGB = HEXtoRGB(colorStore.currentColor);
    // var HSL = RGBtoHSL(RGB);
    // HSL = [HSL[0], HSL[1], this.props.lum];
    // RGB = HSLtoRGB(HSL);
    // var HEX = RGBtoHex(Math.round(RGB[0]), Math.round(RGB[1]), Math.round(RGB[2]));
    // console.log('Complementary Box - store valye', colorStore.currentColor);
    // console.log('ComplementaryBox 222: ', HEX);

    // console.log(colorStore.complimentary);
>>>>>>> saved

  

    var style = {
      background : {
<<<<<<< HEAD
        backgroundColor: HEX
      }
    };

    console.log('complemantary-box : ', HEX);
=======
        backgroundColor: hex
      }
    };

    console.log('complemantary-box : ', hex);
>>>>>>> saved

    // turn everything to HSL and look at the L value
    // keep H and S and change the L value

    return (
      <div className="complemantary-box" style={style.background}></div>
      );
  }
})

export default ComplementaryBox;