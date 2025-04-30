import { Component } from "react";

class ClassLife1 extends Component {
  constructor(props) {
    super(props);
    this.state = { cnt: 0 };
    this.IncCount = this.IncCount.bind(this);
    this.DecCount = this.DecCount.bind(this);
    this.DouCount = this.DouCount.bind(this);
  }

  IncCount(event) {
    this.setState({ cnt: this.state.cnt + 1 });
  }

  DecCount() {
    this.setState({ cnt: this.state.cnt - 1 });
  }

  DouCount() {
    this.setState({ cnt: this.state.cnt + 2 });
  }

  render() {
    return (
      <>
        <h2>Class Component Life Cycle 1 </h2>
        <p>Count is : {this.state.cnt}</p>
        <button className="btn btn-primary" onClick={this.IncCount}>Increase </button> &nbsp;
        <button className="btn btn-danger" onClick={this.DecCount}>Decrease</button> &nbsp;
        <button className="btn btn-secondary" onClick={this.DouCount}>Double</button>
       </>
    );
  }
}

export default ClassLife1;
