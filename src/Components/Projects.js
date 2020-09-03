import React, { Component } from "react";
import { Consumer } from "../Context.js";
import Title from "./Title.js";

export default class Projects extends Component {
  static contextType = Consumer;
  render() {
    const value = this.context;
    return (
      <React.Fragment>
        <section className="projects_section">
          <div className="projects_heading">
            <Title title="projects" />
          </div>
          <div className="projects_header">
            <h3 className="all">all</h3>
            <h3 className="hotel">choudhary hotel</h3>
            <h3 className="ondesk">ondesk</h3>
            <h3 className="onican">onican</h3>
            <h3 className="sathi">sathi school</h3>
            <h3 className="portfolio">portfolio</h3>
            <h3 className="mc">mc solution</h3>
            <h3 className="web_hub">web hub</h3>
          </div>
          <div className="projects_container">
            {value.map((item) => {
              return (
                <div className="projects_img_text">
                  <div className="projects_img">
                    <img src={item.image} />
                  </div>
                  <div className="projects_title">
                    <p>{item.name}</p>
                  </div>
                  <div className="projects_text">
                    <h3>{item.heading}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
