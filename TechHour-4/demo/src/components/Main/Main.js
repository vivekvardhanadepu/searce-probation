import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Navigation from "../Navigation/Navigation";
import Slideshow from "../Slideshow/Slideshow";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/slideshow" component={Slideshow} />
          <Redirect to="/home" />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Main);
