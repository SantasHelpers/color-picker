//MonoChromeRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import ntc from '../client/utils/ntc.js';
import hsltohex from 'hsl-to-hex';
import hextohsl from 'hex-to-hsl';
import constants from '../client/utils/constants.js';
import MonoChromeBox from './MonoChromeBox.js'

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

    var hsl1 = hextohsl(colorStore.monochrome[0]);
    var hex1 = hsltohex(hsl1[0], 90, hsl1[2]);

    var hsl2 = hextohsl(colorStore.monochrome[1]);
    var hex2 = hsltohex(hsl2[0], 60, hsl2[2]);

    var hsl3 = hextohsl(colorStore.monochrome[2]);
    var hex3 = hsltohex(hsl3[0], 30, hsl3[2]);

    var hsl4 = hextohsl(colorStore.monochrome[3]);
    var hex4 = hsltohex(hsl4[0], 10, hsl4[2]);

    colorStore.color1 = hex1;
    colorStore.color2 = hex2;
    colorStore.color3 = hex3;
    colorStore.color4 = hex4;

  }

  render () {
    var color1 = colorStore.monochrome[0];

    var name1 = ntc.name(color1);

    return (
      <div className="monochromeRow graybox">
        <h5 className="label">MonoChromeColor Gradient</h5>
        <div className="complementary-row">
          <div className="complementary-row-group">
            <h5 className="label-triadcolor" style={{'left': '10%'}}>{name1[1]}</h5>
              <MonoChromeBox color={colorStore.monochrome[0]} onClick={this.handleClick.bind(this)} />
              <MonoChromeBox color={colorStore.monochrome[1]} onClick={this.handleClick.bind(this)} />
              <MonoChromeBox color={colorStore.monochrome[2]} onClick={this.handleClick.bind(this)} />
              <MonoChromeBox color={colorStore.monochrome[3]} onClick={this.handleClick.bind(this)} />
              <MonoChromeBox color={colorStore.monochrome[4]} onClick={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>
      );
  }
})

export default MonoChromeRow;