//ComplementaryRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';


var ComplementaryRow = observer(class ComplementaryRow extends React.Component {

  constructor (props) {
    super (props); 
  }

  render () {
    var color1 = colorStore.complimentary[0];
    var color2 = colorStore.complimentary[0];

    return (
      <div className="complemantary-row">
          <ComplementaryBox col={1} lum={70} color={color1} />
          <ComplementaryBox col={2} lum={55} color={color1} />
          <ComplementaryBox col={3} lum={40} color={color1} />
          <ComplementaryBox col={4} lum={25} color={color1} />
          <ComplementaryBox col={5} lum={10} color={color1} />
          <ComplementaryBox col={1} lum={10} color={color2} />
          <ComplementaryBox col={2} lum={25} color={color2} />
          <ComplementaryBox col={3} lum={40} color={color2} />
          <ComplementaryBox col={4} lum={55} color={color2} />
          <ComplementaryBox col={5} lum={70} color={color2} />
      </div>
      );
  }
})

export default ComplementaryRow;
