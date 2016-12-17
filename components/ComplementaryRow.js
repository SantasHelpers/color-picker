//ComplementaryRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import ntc from '../client/utils/ntc.js';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';
import constants from '../client/utils/constants.js';


var ComplementaryRow = observer(class ComplementaryRow extends React.Component {

  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (color, lum) {
    console.log('row handle click: ', color);

    var lumPosition = constants.lums.indexOf(lum);
    var secondLumPosition = lumPosition + 2;
    if (secondLumPosition > 4) {
      secondLumPosition = secondLumPosition - 5;
    }

    var hsl1 = hextohsl(colorStore.complimentary[0]);
    var hex1 = hsltohex(hsl1[0], hsl1[1], lum);

    var hsl2 = hextohsl(colorStore.complimentary[1]);
    var hex2 = hsltohex(hsl2[0], hsl2[1], lum);

    var hsl3 = hextohsl(colorStore.complimentary[0]);
    var hex3 = hsltohex(hsl3[0], hsl3[1], constants.lums[secondLumPosition]);

    var hsl4 = hextohsl(colorStore.complimentary[1]);
    var hex4 = hsltohex(hsl4[0], hsl4[1], constants.lums[secondLumPosition]);

    colorStore.color1 = hex1;
    colorStore.color2 = hex2;
    colorStore.color3 = hex3;
    colorStore.color4 = hex4;
  }

  render () {
    var color1 = colorStore.complimentary[0];
    var color2 = colorStore.complimentary[1];
    var name1 = ntc.name(color1);
    var name2 = ntc.name(color2);

    var styles = { style1: { left: '10%'} };
     var styles2 = { style2: { left: '10%'} };

    return (
      <div className="complementaryRow graybox">
        <h5 className="label">Complementary Color Gradient</h5>
        <div className="complementary-row">

          <div className="complementary-row-group">
          <h5 className="label-color" style={styles.style1}>{name1[1]}</h5>
            <ComplementaryBox col={1} lum={constants.lums[0]} color={color1} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={2} lum={constants.lums[1]} color={color1} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={3} lum={constants.lums[2]} color={color1} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={4} lum={constants.lums[3]} color={color1} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={5} lum={constants.lums[4]} color={color1} onClick={this.handleClick.bind(this)} />
          </div>

          <div className="complementary-row-group">
          <h5 className="label-color" style={styles2.style2}>{name2[1]}</h5>
            <ComplementaryBox col={1} lum={constants.lums[4]} color={color2} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={2} lum={constants.lums[3]} color={color2} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={3} lum={constants.lums[2]} color={color2} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={4} lum={constants.lums[1]} color={color2} onClick={this.handleClick.bind(this)} />
            <ComplementaryBox col={5} lum={constants.lums[0]} color={color2} onClick={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>
      );
  }
})

export default ComplementaryRow;
