import React,{Component} from 'react'

export default class UncontrolForm1 extends Component{
    constructor(props){
        super(props)
        this.inputRef= React.createRef()  // createRef is used in class components
    }

    handleSubmit=(event) =>{
        event.preventDefault();
        alert(`value: ${this.inputRef.current.value}`)
    }

    render(){
        return(
            <>
                <h2>UnControlled Forms by Class Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <label >Enter Name : </label>
                    <input type="text" ref={this.inputRef} />
                    <input type="submit" value="submit" />
                </form>
                <hr />
                <hr />
            </>
        )
    }
}