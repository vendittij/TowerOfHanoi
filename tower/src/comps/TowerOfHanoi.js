import React, {Component} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Ring from './Rings.js'
import Tower from './Tower.js'
import '../App.css';

{/* BackDrop */}

class BackDrop extends Component{
  constructor (props){
    super(props);
    this.state={
      nRings: 4
    };
    this.updateNumRings =this.updateNumRings.bind(this);
  }

  updateNumRings(n){
    this.setState({
      nRings:n
    });
  }

  render(){
    return(
      <div>
        
        <Tower n={this.state.nRings}/>

      </div>
    );
  }
}export default BackDrop;
