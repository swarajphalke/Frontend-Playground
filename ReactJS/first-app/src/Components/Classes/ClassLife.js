import { Component } from "react";

class ClassLife extends Component {
  constructor(props) {
    super(props);
    this.state = { name: " HTML" };
    this.updateName = this.updateName.bind(this);
    console.log("Initialization");
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <>
        <h2>Class Component Life Cycle</h2>
        <p>You have entered {this.state.name}</p>
        <input type="text" onChange={this.updateName} />
       </>
    );
  }
}

export default ClassLife;
