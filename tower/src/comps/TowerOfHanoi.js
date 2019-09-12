import React, {Component} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

{/* Rings */}

class Ring extends Component{
  constructor (props){
    super(props);

    this.state = {
      color : ['red','orange','yellow','green','blue','indigo','violet'],
      wide: 175
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
      numRings.map((ring)=>
      <Rect
      x={this.props.loc+(12.5*ring)}
      y={this.props.height-(20*ring)}
      width={this.state.wide -(12.5*(ring-1)*2)}
      height={20}
      fill={this.state.color[ring-1]}
      />
    )
    );
  }
};

{/* Tower */}

class Tower extends Component{
  constructor (props){
    super(props);

    this.state = {
      color: 'gray',
      height: window.innerHeight*(2/3),
      Loc1: window.innerWidth*(1/6),
      Loc2: window.innerWidth*(1/6)+375,
      Loc3: window.innerWidth*(1/6)+750
    };
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
          <Ring loc={this.state.Loc1} height={this.state.height} n={this.props.n}/>
        </Layer>
      </Stage>
    );
  }

};

{/* BackDrop */}

class BackDrop extends Component{
  constructor (props){
    super(props);
    this.state={
      nRings: 3
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
