import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";


export default class Structure extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home />
        <About />
        <Skills />
        <Projects flag="false" />
      </div>
    );
  }
}
