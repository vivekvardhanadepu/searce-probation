import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("pure comp rendered");
    return <div>I am the pure component {this.props.name}</div>;
  }
}

export default PureComp;
