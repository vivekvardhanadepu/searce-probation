import React, { Component } from "react";
import ModalHeader from "react-bootstrap/ModalHeader";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
        <ModalHeader>header</ModalHeader>
      </div>
    );
  }
}

export default Header;
