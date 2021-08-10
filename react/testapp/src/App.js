import React from "react";
import FuncComp from "./components/functionalComp";
import { ClassComp, ClassComp2 } from "./components/classComp";
import Click from "./components/click";
import Counter from "./components/counter";
import ParentComp from "./components/parentComp";
import Classprops from "./Classprops";
import Functionprops from "./Functionprops";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <FuncComp />
      <ClassComp />
      <ClassComp2 />
      <Click />
      <Counter />
      <ParentComp />
      <Classprops name="vicky" place="blr">
        <p>child component</p>
      </Classprops>
      <Classprops name="buddu" place="tirupati">
        <button>Click</button>
      </Classprops>
      <Classprops name="Gowtham" place="Gaav" />
      <Functionprops name="Ashrith" place="wgl" />
    </div>
  );
}

export default App;
