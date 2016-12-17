//TriadRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import ntc from '../client/utils/ntc.js';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';
import constants from '../client/utils/constants.js';


var TriadRow = observer(class TriadRow extends React.Component {

  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (color, lum) {

  var lumPosition = constants.triad.indexOf(lum);
  var secondLumPosition = lumPosition + 1;
  if (secondLumPosition > 2) {
    secondLumPosition = secondLumPosition - 3;
  }

  var hsl1 = hextohsl(colorStore.triad[0]);
  var hex1 = hsltohex(hsl1[0], hsl1[1], lum);

  var hsl2 = hextohsl(colorStore.triad[1]);
  var hex2 = hsltohex(hsl2[0], hsl2[1], lum);

  var hsl3 = hextohsl(colorStore.triad[2]);
  var hex3 = hsltohex(hsl3[0], hsl3[1], lum);

  colorStore.color1 = hex1;
  colorStore.color2 = hex2;
  colorStore.color3 = hex3;

}

  render () {
    var color1 = colorStore.triad[0];
    var color2 = colorStore.triad[1];
    var color3 = colorStore.triad[2];

    var name1 = ntc.name(color1);
    var name2 = ntc.name(color2);
    var name3 = ntc.name(color3);

    var styles = { style1: { left: '10%'} };
    var styles2 = { style2: { left: '10%'} };
    var styles3 = { style3: { left: '10%'} };

    return (
      <div className="triadRow graybox">
        <h5 className="label">Triad Color Gradient</h5>
        <div className="complementary-row">
          <div className="complementary-row-group">
            <h5 className="label-triadcolor" style={styles.style1}>{name1[1]}</h5>
            <ComplementaryBox col={1} lum={constants.triad[0]} color={color1} onClick={this.handleClick.bind(this)}/>
            <ComplementaryBox col={2} lum={constants.triad[1]} color={color1} onClick={this.handleClick.bind(this)}/>
            <ComplementaryBox col={3} lum={constants.triad[2]} color={color1} onClick={this.handleClick.bind(this)}/>
          </div>

          <div className="complementary-row-group">
            <h5 className="label-triadcolor" style={styles2.style2}>{name2[1]}</h5>
            <ComplementaryBox col={1} lum={constants.triad[0]} color={color2} onClick={this.handleClick.bind(this)}/>
            <ComplementaryBox col={2} lum={constants.triad[1]} color={color2} onClick={this.handleClick.bind(this)}/>
            <ComplementaryBox col={3} lum={constants.triad[2]} color={color2} onClick={this.handleClick.bind(this)}/>
          </div>

          <div className="complementary-row-group">
            <h5 className="label-triadcolor" style={styles3.style3}>{name3[1]}</h5>
            <ComplementaryBox col={1} lum={constants.triad[0]} color={color3} onClick={this.handleClick.bind(this)}/>
            <ComplementaryBox col={2} lum={constants.triad[1]} color={color3} onClick={this.handleClick.bind(this)}/>
            <ComplementaryBox col={3} lum={constants.triad[2]} color={color3} onClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
      );
  }
})

export default TriadRow;
