import React, { Component } from "react";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Services from "./Components/Services.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Team from "./Components/Team.js";
import Contacts from "./Components/Contacts.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/team" component={Team} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
