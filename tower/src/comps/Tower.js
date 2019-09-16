import React, {Component} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Ring from './Rings.js'


class Tower extends Component{
  constructor (props){
    super(props);

    this.state = {
      color: 'gray',
      height: window.innerHeight*(2/3),
      Loc1: window.innerWidth*(1/6),
      Loc2: window.innerWidth*(1/6)+375,
      Loc3: window.innerWidth*(1/6)+750,
    };
    this.eventHandle = this.eventHandle.bind(this);
  }

  eventHandle(c){
    this.setState({color:c});
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        {/*Base of tower */}
          <Rect
            x={this.state.Loc1}
            y={this.state.height}
            width={200}
            height={20}
            fill={this.state.color}
          />
          <Rect
            x={this.state.Loc2}
            y={this.state.height}
            width={200}
            height={20}
            fill={this.state.color}
          />
          <Rect
            x={this.state.Loc3}
            y={this.state.height}
            width={200}
            height={20}
            fill={this.state.color}
          />
          {/* Tower of tower */}
          <Rect
            x={this.state.Loc2+90}
            y={this.state.height}
            width={20}
            height={-200}
            fill={this.state.color}
          />
          <Rect
            x={this.state.Loc3+90 }
            y={this.state.height}
            width={20}
            height={-200}
            fill={this.state.color}
          />
          <Rect
            x={this.state.Loc1+90}
            y={this.state.height}
            width={20}
            height={-200}
            fill={this.state.color}
          />
          <Rect
          x={this.state.Loc1 - 50}
          y={this.state.height + 30}
          width = {300}
          height = {-260}
          stroke = {'white'}
          strokeWidth = {4}
          />
          <Rect
          x={this.state.Loc2 - 50}
          y={this.state.height + 30}
          width = {300}
          height = {-260}
          stroke = {'white'}
          strokeWidth = {4}
          />
          <Rect
          x={this.state.Loc3 - 50}
          y={this.state.height + 30}
          width = {300}
          height = {-260}
          stroke = {'white'}
          strokeWidth = {4}
          />
          <Ring loc={this.state.Loc1} height={this.state.height} n={this.props.n}/>
        </Layer>
      </Stage>
    );
  }

}export default Tower;
