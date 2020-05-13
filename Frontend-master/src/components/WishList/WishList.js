import React, {Component} from 'react';
import {Badge,Button,Switch} from "react-bootstrap";

const ButtonGroup=Button.Group;

class WishList extends  Component{
    state={
    count:0,
    show:true,
};
 increase=()=>{
     let count=this.state.count+1;
     this.setState({count});
 };
 decline=()=>{
     let count=this.state.count-1;
     if(count<0){
         count=0;
     }
     this.setState({count});
 };
 onChange=show=>{
     this.setState({show});
 };
 render() {
     return(
      <div>
          <div>
              <Badge count={this.state.count}>
                  <a href="#"/>
              </Badge>
              <ButtonGroup>
                  <Button onClick={this.decline}></Button>
                  <Button onClick={this.increase}></Button>
              </ButtonGroup>
          </div>
          <div style={{marginTop:10}}>
              <Badge dot={this.state.show}>
                  <a href="#" />
              </Badge>
              <Switch onChange={this.onChange} checked={this.state.show}/>
          </div>
      </div>
     );
 }
}
export default WishList;