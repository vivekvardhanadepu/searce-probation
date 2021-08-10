import React, { Component } from "react";
import PureComp from "./pureComp";
import RegComp from "./regComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "random",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "random" });
    }, 3000);
  }

  render() {
    console.log("parent comp rendered");
    return (
      <div>
        I am the parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
