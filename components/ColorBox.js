import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import {RGBtoHEX, HEXtoRGB, RGBtoHSL, rectangularTetrad, monochromatic, triad,complimentary,squareTetrad,analagous,splitComplimentary, convertMatrix} from './colorCalcHelpers.js';
import hexToHsl from 'hex-to-hsl';
import hsltohex from 'hsl-to-hex';

var ColorBox = observer(class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
     console.log('handleclick');
     var currentHSL = hexToHsl(this.props.style);
      colorStore.currentColor = this.props.style;
     // console.log('Current Color: ', colorStore.currentColor);
     // console.log('compbeforeconvert', JSON.stringify(complimentary(currentHSL)));
     colorStore.complimentary = complimentary(currentHSL);
     colorStore.triad = triad(currentHSL);
     // console.log(triad(currentHSL));
     // console.log(squareTetrad(currentHSL));
     colorStore.tetrad = squareTetrad(currentHSL);
     // console.log(rectangularTetrad(currentHSL));
     colorStore.rectangularTetrad = rectangularTetrad(currentHSL);
     // console.log('mono', monochromatic(currentHSL));
     colorStore.monochrome = monochromatic(currentHSL);
     // console.log(analagous(currentHSL));
     colorStore.analagous = analagous(currentHSL);
     // console.log(splitComplimentary(currentHSL));
     colorStore.splitComplimentary = splitComplimentary(currentHSL);
     // console.log('Current Color: ', colorStore.currentColor);

    }


  toggleHover() {
    this.setState({hover: !this.state.hover });

  }

  render () {
    var styles = {
      background: {
        backgroundColor: this.props.style,
        top: this.props.row * 20,
        left: this.props.col * 20
      }
    };

    var classNormal = 'box';
    var classHover = 'box-hover';
    var currentClassName;
    if (!this.state.hover) {
      currentClassName = classNormal;
    } else {
      currentClassName = classHover;
    }

    return (
      <div className={currentClassName} style={styles.background}
           onMouseEnter={this.toggleHover}
           onMouseLeave={this.toggleHover}
           onClick={this.handleClick}>
      </div>
      );
  }
  //styleSheet1 will have the color passed in from the calling box
  //styleSheet 2 will be the same thing but with highlights and shit
})

export default ColorBox;