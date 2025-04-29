import { Component } from "react";

class StateEx1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count:1 };
    //Initial value
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(event) {
    this.setState({ count:this.state.count+1 });
  }

  render() {
    return (
      <>
        <h3>Count : {this.state.count} </h3>
        <input type="button" value="Increment" onClick={this.updateCount} />
      </>
    );
  }
}

export default StateEx1;
