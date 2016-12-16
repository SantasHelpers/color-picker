import React from 'react';
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';


var SwatchBox = observer(class SwatchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    colorStore.sideBarBaseColor = this.props.style;
    console.log('Current Color: ', colorStore.sideBarBaseColor);

  }

  toggleHover() {
    this.setState({hover: !this.state.hover });

  }

  render () {
    var styles = {
      background: {
        backgroundColor: this.props.style,
        top: this.props.row * 80,
      }
    };

    var classNormal = 'swatchBox';
    var classHover = 'swatchBox-hover';
    var currentClassName;
    if (!this.state.hover) {
      currentClassName = classNormal;
    } else {
      currentClassName = classHover;
    }

    return (
      <div className={currentClassName} style={styles.background}
           onMouseEnter={this.toggleHover}
           onMouseLeave={this.toggleHover}
           onClick={this.handleClick}>
      </div>
      );
  }
})

export default SwatchBox;