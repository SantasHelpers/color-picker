import React from 'react';
import ColorInfoView from './ColorInfoView';
import {Panel, Button, Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router';
import { HEXtoRGB, RGBtoHSL } from './colorCalcHelpers.js';

// Color Store imports
import colorStore from './colorStore.js';
import { observer } from 'mobx-react';


var ColorFamilyInfoView = observer(class ColorFamilyInfoView extends React.Component {
  constructor(props) {
    super(props);
  }

  convertHexToRGB() {
    var objArr = [];
    for (var key in this.props.currentFamily) {
      if (key.match(/^color./)) {
        var newObj = {};
        var rgbObj = HEXtoRGB(this.props.currentFamily[key]);
        var rgb = 'rgb(' + rgbObj.r + ', ' + rgbObj.g + ', ' + rgbObj.b + ')';
        var newObj = {hex: this.props.currentFamily[key], rgb: rgb};
        objArr.push(newObj);
      }
    }
    return objArr;
  }

  render() {
    // console.log(this.props.currentFamily);

    // var styles = {
    //   borderColor1: {
    //     margin: '1px',
    //     borderWidth: '2px',
    //     borderColor: colorStore.currentColor
    //   },
    //   bgColor1: {
    //     margin: '1px',
    //     backgroundColor: colorStore.currentColor
    //   },

    //   borderColor2: {
    //     margin: '1px',
    //     borderWidth: '2px',
    //     borderColor: colorStore.currentFamily.color2
    //   },
    //   bgColor2: {
    //     margin: '1px',
    //     backgroundColor: colorStore.currentFamily.color2
    //   },

    //   borderColor3: {
    //     margin: '1px',
    //     borderWidth: '2px',
    //     borderColor: colorStore.currentFamily.color3
    //   },
    //   bgColor3: {
    //     margin: '1px',
    //     backgroundColor: colorStore.currentFamily.color3
    //   },

    //   borderColor4: {
    //     margin: '1px',
    //     borderWidth: '2px',
    //     borderColor: colorStore.currentFamily.color4
    //   },
    //   bgColor4: {
    //     margin: '1px',
    //     backgroundColor: colorStore.currentFamily.color4
    //   },

    //   borderColor5: {
    //     margin: '1px',
    //     borderWidth: '2px',
    //     borderColor: colorStore.currentFamily.color5
    //   },
    //   bgColor5: {
    //     margin: '1px',
    //     backgroundColor: colorStore.currentFamily.color5
    //   }
    // };

    return (
      <div className="sidebar-content">


        <div className="color-family-info">
          {this.convertHexToRGB().map(function(color, index) {
            return <ColorInfoView color={color} key={index} index={index}/>;
          })}

           <h5> Example UI Elements</h5>

          <Panel className="fill-button" className='previewLink'>
            <Link to={{pathname: '/preview', query: this.props.currentFamily}}>PREVIEW 1</Link>
          </Panel>
            <Button className="fill-button" style={{'backgroundColor': colorStore.color1}}> Color 1 </Button>
            <Button className="fill-button" style={{'backgroundColor': colorStore.color2}}> Color 2 </Button>
            <Button className="fill-button" style={{'backgroundColor': colorStore.color3}}> Color 3 </Button>
            <Button className="fill-button" style={{'backgroundColor': colorStore.color4}}> Color 4 </Button>
            <Button className="fill-button" style={{'backgroundColor': colorStore.color5}}> Color 5 </Button> <br/><br/>

          <Panel className="border-button" className='previewLink'>
            <Link to={'/preview'}>PREVIEW 2</Link>
          </Panel>
            <Button className="border-button" style={{'borderColor': colorStore.color1}}> Color 1 </Button>
            <Button className="border-button" style={{'borderColor': colorStore.color2}}> Color 2 </Button>
            <Button className="border-button" style={{'borderColor': colorStore.color3}}> Color 3 </Button>
            <Button className="border-button" style={{'borderColor': colorStore.color4}}> Color 4 </Button>
            <Button className="border-button" style={{'borderColor': colorStore.color5}}> Color 5 </Button>

        </div>

      </div>
    );
  }
})

export default ColorFamilyInfoView;
