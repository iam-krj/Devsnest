import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Counter extends Component {
constructor(){
    super();
    this.state={
        number1:0,
        number2:0,
        number3:0,
        number4:0
    }
}

rise1(){
    this.setState({number1:this.state.number1+1})
}

rise2(){
    this.setState({number2:this.state.number2+1})
}

rise3(){
    this.setState({number3:this.state.number3+1})
}

rise4(){
    this.setState({number4:this.state.number4+1})
}



render() {
    return(
        <div>
        <button className="b" onClick={()=>{this.rise1()}}> {this.state.number1} </button>
        <button className="b" onClick={()=>{this.rise2()}}> {this.state.number2} </button>
        <button className="b" onClick={()=>{this.rise3()}}> {this.state.number3} </button>
        <button className="b" onClick={()=>{this.rise4()}}> {this.state.number4} </button>
        </div>
    )
}
}

export default Counter;