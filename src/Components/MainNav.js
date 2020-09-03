import React, { Component } from "react";
import "./MainNav.css";
import pic1 from "../images/home_logo.jpg";
import { Link } from "react-router-dom";

export default class MainNav extends Component {
  render() {
    return (
      <>
        <div className="nav_container">
          <div className="center_logo">
            <Link to="/">
              <img src={pic1} alt="logo_image" />
            </Link>
          </div>
          <div className="main_nav">
            <div className="main_nav_container">
              <div className="home active">
                <Link to="/">home</Link>
              </div>
              <div className="about">
                <Link to="About">about</Link>
              </div>
              <div className="services">
                <Link to="Services">services</Link>
                <div className="dropdown">
                  <div className="web_design">
                    <Link to="Services">web design</Link>
                  </div>
                  <div className="web_development">
                    <Link to="Services">web development</Link>
                  </div>
                  <div className="mobile_application">
                    <Link to="Services">mobile application</Link>
                  </div>
                  <div className="responsive_design">
                    <Link to="Services">responsive design</Link>
                  </div>
                </div>
              </div>
              <div className="projects">
                <Link to="Projects">projects</Link>
              </div>
              <div className="skills">
                <Link to="Skills">skills</Link>
              </div>
              <div className="team">
                <Link to="Team">team</Link>
              </div>
              <div className="contacts">
                <Link to="Contacts">contacts</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
