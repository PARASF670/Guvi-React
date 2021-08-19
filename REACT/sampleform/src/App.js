import React, { Component } from 'react';

export default class Todo extends Component{
  constructor() {
    super();
    this.state = {
      tasks: " ",
      list:[],
    }

  }
  handletasks = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
    
  }

  handleClick = (event) => {
    event.preventDefault();
    const list = [...this.state.list];
    console.log('Value is' + this.state.tasks);
    list.push(this.state.tasks);
    this.setState({
      list,
      tasks:"",
    })
    console.log(this.state.list);
    
  }

  render() {
    return (
      <>
        <h4>Welcome to TODO App</h4>
        <input type="text" name="tasks" value={this.state.tasks} onChange={this.handletasks} />
        <input type="submit" name="submit" onClick={this.handleClick} />
       
        <br />
        <br />
        {
          this.state.list.map((data) =><p>{data}</p>)
      }
        
        
      
        
        
        
        
      </>
    );
  }
}