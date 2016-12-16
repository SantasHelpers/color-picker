//TetradRow.js
import React from 'react';
import ComplementaryBox from './ComplementaryBox.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';


var TetradRow = observer(class TetradRow extends React.Component {

  constructor (props) {
    super (props); 
  }

  render () {

    // console.log('tetrad :', colorStore.tetrad[0]);
    // console.log('tetrad :', colorStore.tetrad[1]);
    // console.log('tetrad :', colorStore.tetrad[2]);
    // console.log('tetrad :', colorStore.tetrad[3]);

    var color1 = colorStore.tetrad[0];
    var color2 = colorStore.tetrad[1];
    var color3 = colorStore.tetrad[2];
    var color4 = colorStore.tetrad[3];

    return (
      <div>
        <h5 className="label">Tetrad Color Gradient</h5>
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
          <ComplementaryBox col={2} lum={80} color={color4} />
          <ComplementaryBox col={3} lum={50} color={color4} />
          <ComplementaryBox col={4} lum={20} color={color4} />
        </div>
      </div>
      );
  }
})

export default TetradRow;