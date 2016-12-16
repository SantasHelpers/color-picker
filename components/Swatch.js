import React from 'react';
import SwatchRow from './SwatchRow.js';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';

var Swatch = observer(class Swatch extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {};

  render () {
    return (
      <div>
        <SwatchRow className="Triad" colorList={colorStore.triad} row={0}/>
        <SwatchRow className="Tetrad" colorList={colorStore.tetrad} row={1}/>
        <SwatchRow className="Monochrome" colorList={colorStore.monochrome} row={2}/>
        <SwatchRow className="Analagous" colorList={colorStore.analagous} row={3}/>
      </div>
      )
  }
});

export default Swatch;