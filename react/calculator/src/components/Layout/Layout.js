import React, { Component } from "react";
import "./Layout.css";
import logo from "../../assets/img/logo.svg";
import Output from "../Output/Output";
// import math;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0",
      result: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const value = event.target.value;
    if (value === "=") {
      // console.log("entering? =");
      if (this.state.input !== "") {
        let res = "";
        try {
          res = eval(this.state.input);
        } catch (err) {
          this.setState({ result: "Math error" });
        }
        if (res === undefined) {
          this.setState({ result: "Math error" });
        } else {
          this.setState({ result: this.state.input + "=" });
          this.setState({ input: res });
          // console.log("result is", res);
        }
      }
    } else if (value === "C") {
      this.setState({ input: "0" });
      this.setState({ result: "" });
    } else if (value === "DEL") {
      let str = this.state.input;
      str = str.substr(0, str.length - 1);
      this.setState({ input: str });
    } else if (this.state.input === "0") {
      this.setState({ input: value });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };
  render() {
    return (
      <div className="frame">
        <div className="calculator">
          <br></br>
          <Output user={this.state.input} answer={this.state.result} />
          <img
            src={logo}
            width="150px"
            height="50px"
            style={{ display: "block" }}
            alt="logo"
          ></img>
          <div className="keys">
            <input
              type="button"
              value={"C"}
              className="button clear"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"DEL"}
              className="button clear"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"%"}
              className="button operator"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"/"}
              className="button operator"
              onClick={this.handleClick}
            ></input>

            <input
              type="button"
              value={"7"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"8"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"9"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"*"}
              className="button operator"
              onClick={this.handleClick}
            ></input>

            <input
              type="button"
              value={"4"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"5"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"6"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"-"}
              className="button"
              onClick={this.handleClick}
            ></input>

            <input
              type="button"
              value={"1"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"2"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"3"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"+"}
              className="button operator"
              onClick={this.handleClick}
            ></input>

            <input
              type="button"
              value={"0"}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"."}
              className="button"
              onClick={this.handleClick}
            ></input>
            <input
              type="button"
              value={"="}
              className="button operator"
              onClick={this.handleClick}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
