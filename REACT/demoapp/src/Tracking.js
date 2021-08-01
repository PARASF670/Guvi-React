import React, {Component} from 'react';
export default class Track extends Component{
    constructor() {
        super();
        this.state = {
            data: "",
        }
    }
handleChange=(e)=> {
    this.setState({
        data: e.target.value,

    })
}
    render() {
        return (<>
            <br/>
            <br/>
            <input type="text" onChange={this.handleChange} value={this.state.data }/>
            <p>{this.state.data}</p>
        
        </>
        )
    }
}