import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("reg comp rendered");
    return <div>I am the regular component {this.props.name}</div>;
  }
}

export default RegComp;
