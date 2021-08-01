import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component{
    constructor(props) {
        super(props);
        //Count state with initial 0
        this.state = {
            countval: 0,
        };
    }
    //Increment function
    increment = (inc) => {
        this.setState(
            {
                countval: this.state.countval + inc
            }
        );
    }
    /* 
    Sample increment function without using arrow function
    increment(){
    this.setState({countval:this.state.countval +1})
    }
    Inside Constructor:
    constructor(){
    super();
    this.state={
    countval:0,
    }
    this.increment=this.increment.bind(this);
    }
    */
     //Decrement function
    decrement = () => {
        this.setState(
            {
                countval: this.state.countval - 1
            }
        );
    }
     //Reset function
    reset = () => {
        this.setState(
            {
                countval: 0
            }
        );
    }
    render() {
        return (
            <>
                <p>Hello {this.props.name} !</p>
                <p>WELCOME to counter !..</p>
                <p>Count:{this.state.countval}</p>
                <button onClick={() =>  this.increment(4) }>Increment</button>//To send parameters to function 
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
        
            </>
        );
            
           
    }
}
export default Counter;