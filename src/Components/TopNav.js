import React, { Component } from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";

export default class TopNav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="top_nav">
          <div className="top_nav_left">
            <div className="top_nav_left_icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="top_nav_left_text">
              <Link to="/">
                <h3>web hub solution</h3>
              </Link>
            </div>
          </div>
          <div className="top_nav_right">
            <div className="mail">
              <a href="mailto:maddychoudhary0786@gmail.com">
                <i className="fas fa-envelope"></i>mail us
              </a>
            </div>
            <div className="skype">
              <a href="#">
                <i className="fab fa-skype"></i>choudhary
              </a>
            </div>
            <div className="phone">
              <a href="tel:+919024283411">
                <i className="fas fa-mobile-alt"></i>+919024283411
              </a>
            </div>
            <div className="contact">
              <Link to="/Contacts">contacts</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
