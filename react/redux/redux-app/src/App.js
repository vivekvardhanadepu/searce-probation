// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import NewComp from "./NewComp";
class App extends Component {
  styles = { fontstyle: "bold", color: "teal" };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome!!</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
