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

  render () {


    return (
      <div className="complemantary-row">
          <ComplementaryBox col={1} lum={10}/>
          <ComplementaryBox col={2} lum={30}/>
          <ComplementaryBox col={3} lum={50}/>
          <ComplementaryBox col={4} lum={70}/>
          <ComplementaryBox col={5} lum={90}/>
      </div>
      );
  }
})

export default ComplementaryRow;
