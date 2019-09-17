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
      ringsLocs1: [],
      ringsLocs2: [],
      ringsLocs3: [],
      x:0,
      y:0,
      top:true,
      win:false
    };
    this.setRings = this.setRings.bind(this);
    for(var i=1;i<this.props.n+1;i++){
      this.state.ringsLocs1.push(i);
    }
  }

  setRings(){
    var i;
    var group = [];

    for(i=1;i<this.props.n+1;i++){
      group.push(i);
    }
    return group;
  }

  gameWon (){
    console.log(this.state.ringsLocs3.length == this.props.n);
    if(this.state.ringsLocs3.length == this.props.n){
      return true;
    }return false;
  }

  checkGameWon = e =>{
    if(this.gameWon()){
      e.target.to({
        draggable:false
      });
    }
  }

  setOrigLoc= e =>{
    var key = Number(e.target.attrs.id);
    this.setState({
      x:e.target.attrs.x,
      y:e.target.attrs.y
    })
    if(e.target.attrs.x + e.target.attrs.width >= this.props.loc-50  &&  e.target.attrs.x <= this.props.loc +250){
      if(this.onTop(key,this.state.ringsLocs1)){
        this.setState({
          top:true
        })
      }else{
        this.setState({
          top:false
        })
      }
    }
    else if(e.target.attrs.x + e.target.attrs.width >= this.props.loc+325  &&  e.target.attrs.x <= this.props.loc +575){
      if(this.onTop(key,this.state.ringsLocs2)){
        this.setState({
          top:true
        })
      }else{
        this.setState({
          top:false
        })
      }
    }
    else if(e.target.attrs.x + e.target.attrs.width >= this.props.loc+700  &&  e.target.attrs.x <= this.props.loc +950){
      if(this.onTop(key,this.state.ringsLocs3)){
        this.setState({
          top:true
        })
      }else{
        this.setState({
          top:false
        })
      }
    }
  }

  biggerOnBottom(key, location){
    if (location.length == 0){
      return true;
    }else if(key > location[location.length-1]){
      return true;
    }else{return false;}
  }

  onTop(key,location){
    if(key == location[location.length-1]){
      return true;
    }return false;
  }

  handleDragEnd = e => {

    var key = Number(e.target.attrs.id);
// Tower 1 animation and snapping
    if(this.state.top){
      if(e.target.attrs.x + e.target.attrs.width >= this.props.loc-50  &&  e.target.attrs.x <= this.props.loc +250){
        if(this.biggerOnBottom(key,this.state.ringsLocs1)){
          e.target.to({
            x:this.props.loc +(12.5*key),
            y:this.props.height - (20*(this.state.ringsLocs1.length+1))
          });
          this.state.ringsLocs1.push(key);
          // These Two loops remove the ring from other tower locations
          for( var i = 0; i < this.state.ringsLocs2.length; i++){
            if ( this.state.ringsLocs2[i] === key) {
              this.state.ringsLocs2.splice(i, 1);
            }
          }
          for( var i = 0; i < this.state.ringsLocs3.length; i++){
            if ( this.state.ringsLocs3[i] === key) {
              this.state.ringsLocs3.splice(i, 1);
            }
          }
        }
        else{
          e.target.to({
          x:this.state.x,
          y:this.state.y
        });
        }
      }
  // Tower 2 animation and snapping
      else if(e.target.attrs.x + e.target.attrs.width >= this.props.loc+325  &&  e.target.attrs.x <= this.props.loc +575){
        if(this.biggerOnBottom(key,this.state.ringsLocs2)){
          e.target.to({
            x:this.props.loc+375 +(12.5*key),
            y:this.props.height - (20*(this.state.ringsLocs2.length+1))
          });
          this.state.ringsLocs2.push(key);
          // These Two loops remove the ring from other tower locations
          for( var i = 0; i < this.state.ringsLocs1.length; i++){
            if ( this.state.ringsLocs1[i] === key) {
              this.state.ringsLocs1.splice(i, 1);
            }
          }
          for( var i = 0; i < this.state.ringsLocs3.length; i++){
            if ( this.state.ringsLocs3[i] === key) {
              this.state.ringsLocs3.splice(i, 1);
            }
          }
        }else{
          e.target.to({
          x:this.state.x,
          y:this.state.y
        });
        }
      }
  // Tower 3 animation and snapping
      else if(e.target.attrs.x + e.target.attrs.width >= this.props.loc+700  &&  e.target.attrs.x <= this.props.loc +950){
        if(this.biggerOnBottom(key,this.state.ringsLocs3)){
          e.target.to({
            x:this.props.loc+750 +(12.5*key),
            y:this.props.height - (20*(this.state.ringsLocs3.length+1))
          });
          this.state.ringsLocs3.push(key);
          // These Two loops remove the ring from other tower locations
          for( var i = 0; i < this.state.ringsLocs2.length; i++){
            if ( this.state.ringsLocs2[i] === key) {
              this.state.ringsLocs2.splice(i, 1);
            }
          }
          for( var i = 0; i < this.state.ringsLocs1.length; i++){
            if ( this.state.ringsLocs1[i] === key) {
              this.state.ringsLocs1.splice(i, 1);
            }
          }
        }else{
          e.target.to({
          x:this.state.x,
          y:this.state.y
        });
        }
      }
    }else{
      e.target.to({
      x:this.state.x,
      y:this.state.y
    });
    }
    console.log(this.state.ringsLocs1);
    console.log(this.state.ringsLocs2);
    console.log(this.state.ringsLocs3);
  }

  render(){
    const numRings = this.setRings();
    return(
      numRings.map((ring)=>{
        return(
          <Rect
          key={ring.toString()}
          id={ring.toString()}
          x={this.props.loc+(12.5*ring)}
          y={this.props.height-(20*ring)}
          width={this.state.wide -(12.5*(ring-1)*2)}
          height={20}
          fill={this.state.color[ring-1]}
          draggable={true}
          onClick = {this.checkGameWon}
          onDragStart= {this.setOrigLoc}
          onDragEnd = {this.handleDragEnd}
          />
        )
      })

    );
  }
}export default Ring;
