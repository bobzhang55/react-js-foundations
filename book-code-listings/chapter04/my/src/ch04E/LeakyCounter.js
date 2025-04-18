import { Component } from "react";

export class LeakyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);//setState() is asynchronous
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.incrementCount();
    }, 1000);
  }

  render() {
    return (
      <>
        <p>The current count is: {this.state.count}.</p>

      </>
    );
  }
}
// export default LeakyCounter;
