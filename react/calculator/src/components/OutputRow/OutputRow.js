import React, { Component } from "react";
import "./OutputRow.css";

class OutputRow extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          readOnly
          className="screen"
          style={this.props.textSize}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default OutputRow;
