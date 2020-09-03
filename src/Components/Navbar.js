import React, { Component } from "react";
import DesktopNav from "./DesktopNav.js";
import MobileNav from "./MobileNav.js";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <DesktopNav />
        <MobileNav />
      </>
    );
  }
}
