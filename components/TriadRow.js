//TriadRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';


var TriadRow = observer(class TriadRow extends React.Component {

  constructor (props) {
    super (props); 
  }

  render () {
    var color1 = colorStore.triad[0];
    var color2 = colorStore.triad[1];
    var color3 = colorStore.triad[2];

    return (
      <div>
        <h5 className="label">Triad Color Gradient</h5>
        <div className="complementary-row">
          <ComplementaryBox col={1} lum={80} color={color1} />
          <ComplementaryBox col={2} lum={50} color={color1} />
          <ComplementaryBox col={3} lum={20} color={color1} />
          <ComplementaryBox col={4} lum={80} color={color2} />
          <ComplementaryBox col={5} lum={50} color={color2} />
          <ComplementaryBox col={1} lum={20} color={color2} />
          <ComplementaryBox col={2} lum={80} color={color3} />
          <ComplementaryBox col={3} lum={50} color={color3} />
          <ComplementaryBox col={4} lum={20} color={color3} />
        </div>
      </div>
      );
  }
})

export default TriadRow;
