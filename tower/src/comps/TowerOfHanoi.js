import React, {Component} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';


class Tower extends Component{
  state = {
    color: 'green'
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
          />
        </Layer>
      </Stage>
    );
  }

}export default Tower;
