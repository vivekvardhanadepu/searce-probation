import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">Searce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/home">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/slideshow">Slideshow</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
