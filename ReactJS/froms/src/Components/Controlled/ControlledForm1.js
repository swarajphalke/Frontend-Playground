import { Component } from "react";

class ControlForm1 extends Component{
    constructor(props){
        super(props)
        this.state = {value : ''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    handleSubmit(){
        alert(this.state.value)
    }

    render(){
        return(
            <>
                <h2>Controlled Form by Class Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Name : </label>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value="submit" />
                </form>
            </>
        )
    }
}

export default ControlForm1