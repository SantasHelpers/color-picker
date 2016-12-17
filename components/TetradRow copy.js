//MonoChromeRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import ntc from '../client/utils/ntc.js';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';
import constants from '../client/utils/constants.js';


var MonoChromeRow = observer(class MonoChromeRow extends React.Component {

  constructor (props) {
    super (props); 
  }

  handleClick (color, lum) {

    var lumPosition = constants.quad.indexOf(lum);
    var secondLumPosition = lumPosition + 1;
    if (secondLumPosition > 2) {
      secondLumPosition = secondLumPosition - 3;
    }

    var hsl1 = hextohsl(colorStore.tetrad[0]);
    var hex1 = hsltohex(hsl1[0], hsl1[1], lum);

    var hsl2 = hextohsl(colorStore.tetrad[1]);
    var hex2 = hsltohex(hsl2[0], hsl2[1], lum);

    var hsl3 = hextohsl(colorStore.tetrad[2]);
    var hex3 = hsltohex(hsl3[0], hsl3[1], lum);

    var hsl4 = hextohsl(colorStore.tetrad[3]);
    var hex4 = hsltohex(hsl4[0], hsl4[1], lum);

    colorStore.color1 = hex1;
    colorStore.color2 = hex2;
    colorStore.color3 = hex3;
    colorStore.color4 = hex4;

  }

  render () {
    var color1 = colorStore.monochrome[0];
    var color2 = colorStore.monochrome[1];
    var color3 = colorStore.monochrome[2];
    var color4 = colorStore.monochrome[3];

    var name1 = ntc.name(color1);
    var name2 = ntc.name(color2);
    var name3 = ntc.name(color3);
    var name4 = ntc.name(color4);

    return (
      <div>
        <h5 className="label">MonoChromeColor Gradient</h5>
        <div className="complementary-row">
          <div className="complementary-row-group">
            <h5 className="label-triadcolor" style={{'left': '10%'}}>{name1[1]}</h5>
              <ComplementaryBox col={1} lum={constants.quad[1]} color={color1} onClick={this.handleClick.bind(this)} />
              <ComplementaryBox col={2} lum={constants.quad[2]} color={color1} onClick={this.handleClick.bind(this)} />
              <ComplementaryBox col={3} lum={constants.quad[3]} color={color1} onClick={this.handleClick.bind(this)}/>
              <ComplementaryBox col={3} lum={constants.quad[3]} color={color1} onClick={this.handleClick.bind(this)}/>
          </div> 
        </div>
      </div>
      );
  }
})

export default MonoChromeRow;