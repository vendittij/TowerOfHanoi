import React, {Component} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';



class Ring extends Component{
  constructor (props){
    super(props);

    this.state = {
      color : ['red','orange','yellow','green','blue','indigo','violet'],
      wide: 175,
      ringLocs: []
    };
    this.setRings = this.setRings.bind(this);
    Konva.Rect = Konva.Rect.bind(this);
  }

  setRings(){
    var i;
    var group = [];

    for(i=1;i<this.props.n+1;i++){
      group.push(i);
    }
    return group;
  }

  render(){
    const numRings = this.setRings();
    return(

      numRings.map((ring)=>{
        return(
          <Rect
          x={this.props.loc+(12.5*ring)}
          y={this.props.height-(20*ring)}
          width={this.state.wide -(12.5*(ring-1)*2)}
          height={20}
          fill={this.state.color[ring-1]}
          draggable={true}
          />
        )
      })
    );
  }
}export default Ring;
