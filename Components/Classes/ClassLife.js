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

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        <h1>Class Component Life Cycle... </h1>
        <h2>You have entered {this.state.name}</h2>
        <input type="text" onChange={this.updateName} />
      </>
    );
  }
}

export default ClassLife;
