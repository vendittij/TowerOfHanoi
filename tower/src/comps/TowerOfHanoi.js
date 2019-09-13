import React, {Component} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Ring from './Rings.js'
import Tower from './Tower.js'



{/* BackDrop */}

class BackDrop extends Component{
  constructor (props){
    super(props);
    this.state={
      nRings: 1
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
        <button onClick={()=>this.updateNumRings(3)}>3</button>
        <button onClick={()=>this.updateNumRings(4)}>4</button>
        <button onClick={()=>this.updateNumRings(5)}>5</button>
        <button onClick={()=>this.updateNumRings(6)}>6</button>

        <Tower n={this.state.nRings}/>

      </div>
    );
  }
}export default BackDrop;
