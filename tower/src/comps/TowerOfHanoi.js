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
      nRings: 4,
      moves: 0,
      hidden: true
    };
    this.updateNumRings =this.updateNumRings.bind(this);
    this.updateMoves =this.updateMoves.bind(this);
  }

  updateNumRings(n){
    this.setState({
      nRings:n
    });
  }

  updateMoves(){
    var n = this.state.moves+1
    this.setState({
      moves:n
    });
  }

  render(){
    return(
      <div>
        <h3>Current number of moves:</h3>
        <h4>{this.state.moves}</h4>
        <Tower n={this.state.nRings} moves={this.state.moves} updateMoves={this.updateMoves}/>

      </div>
    );
  }
}export default BackDrop;
