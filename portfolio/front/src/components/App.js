import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Structure from "./Structure";
import Projects from "./Projects";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Structure} /> 
            <Route path="/projects"  render={(props) => <Projects {...props} flag={"true"} />}  />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}




const appDiv = document.getElementById("app");
render(<App />, appDiv);