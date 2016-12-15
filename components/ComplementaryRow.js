//ComplementaryRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';
import { HEXtoRGB, RGBtoHSL } from './colorCalcHelpers.js';


var ComplementaryRow = observer(class ComplementaryRow extends React.Component {

  constructor (props) {
    super (props);
  }

  componentWillMount () {

   var RGB = HEXtoRGB(colorStore.currentColor);
   var HSL = RGBtoHSL(RGB);
   console.log('component will mount: ', HSL);
  }

  render () {

    return (
      <div className="complemantary-row">
          <ComplementaryBox col={1}/>
          <ComplementaryBox col={2}/>
          <ComplementaryBox col={3}/>
          <ComplementaryBox col={4}/>
          <ComplementaryBox col={5}/>
      </div>
      );
  }
})

export default ComplementaryRow;
