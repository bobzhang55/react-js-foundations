"use strict";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personName: "Bob Z" };
  }

  render() {
    // return React.createElement("h1", null, "Hello, " + this.state.personName);
    let e = React.createElement("h1", null, "Hello, " + this.state.personName);
    return e;
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(React.createElement(HelloWorld), domContainer);
