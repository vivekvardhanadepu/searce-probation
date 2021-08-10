import React, { Component } from "react";
import logo from "../logo.svg";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Subscribe",
      sub: "Subscribe",
      img_url: logo,
    };
  }

  buttonChange = () => {
    this.setState({ msg: "hit the bell icon", sub: "subscribed" });
  };

  imgChange = () => {
    this.setState({
      img_url:
        "https://source.unsplash.com/assets/grid-erondu-1d1407af0d578ecaa04ef86a84f1906172c2140513fced96b99dfc2a169d0e89.png",
      msg: "thank you",
    });
  };
  styles = { fontstyle: "italic", color: "purple" };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.msg}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
        <p>
          <img
            style={{ width: "30px", height: "30px" }}
            onClick={this.imgChange}
            src={this.state.img_url}
            alt=""
          ></img>
        </p>
      </div>
    );
  }
}

export default NewComp;
