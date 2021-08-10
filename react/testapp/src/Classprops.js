import React, { Component } from "react";

class Classprops extends Component {
  render() {
    return (
      <div>
        <h3>
          Heloooooooooooooooo {this.props.name} from {this.props.place}
        </h3>
        {this.props.children}
      </div>
    );
  }
}

export default Classprops;
