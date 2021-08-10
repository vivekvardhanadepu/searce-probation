import React, { Component } from "react";
import UpdatedComp from "./higherOrderComp";

class Click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateClick}>
          {this.props.name} clicked {count} time(s)
        </button>
      </div>
    );
  }
}

export default UpdatedComp(Click);
