import React, { Component } from "react";
import TopNav from "./TopNav.js";
import MainNav from "./MainNav.js";

export default class DesktopNav extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <MainNav />
      </React.Fragment>
    );
  }
}
