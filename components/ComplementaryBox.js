//ComplementaryBox.js

import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';


var ComplementaryBox = observer(class ComplementaryBox extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    var style = {
      background : {
        backgroundColor: colorStore.currentColor
      }
    };

    console.log('complemantary-box : ', colorStore.currentColor);

    // turn everything to HSL and look at the L value
    // keep H and S and change the L value

    return (
      <div className="complemantary-box" style={style.background}></div>
      );
  }
})

export default ComplementaryBox;