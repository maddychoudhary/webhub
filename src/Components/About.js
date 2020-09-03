import React, { Component } from "react";
import "./About.css";
import Title from "./Title.js";
import about1 from "../images/about_img.jpg";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about_section">
          <Title title="about" />
          <div className="about_container">
            <div className="about_image">
              <img src={about1} alt="about_image" />
            </div>
            <div className="about_text">
              <h3>about web hub solution</h3>
              <div className="about_para">
                <p>
                  Web Hub Solution is a team of IIT and IIM venture. With more
                  than 5+ years of experience, we provide Top-notch Mobile App,
                  Web and Software Development services to start-ups to
                  enterprise level company. Our trained, highly skilled web
                  developers are specialize to latest web technology like PHP,
                  ReactJS, AngularJS, NodeJS, Magento, Wordpress, .Net and many
                  others.
                </p>
                <p>
                  Team Web Hub is here to create future driven solutions to
                  deliver the right business outcomes.We are in the business of
                  robust, fast, scalable and digitally transformative web and
                  mobile applications.What we do is create highly potential,
                  customised, scalable and easy to access development solutions
                  for our client.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
