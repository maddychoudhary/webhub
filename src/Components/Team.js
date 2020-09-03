import React, { Component } from "react";
import Title from "./Title.js";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";

export default class Team extends Component {
  state = {
    team: [
      {
        images: team1,
        title: "front end developer",
        compName: "web hub solution",
        name: "manish gupta",
        city: "sikar",
      },
      {
        images: team2,
        title: "back end developer",
        compName: "web hub solution",
        name: "ayushi rathor",
        city: "kanpur",
      },
      {
        images: team3,
        title: "manager",
        compName: "web hub solution",
        name: "maddy choudhary",
        city: "delhi",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="team_section">
          <div className="team_heading">
            <Title title="team" />
          </div>
          <div className="team_container">
            {this.state.team.map((item) => {
              return (
                <div className="team_content">
                  <div className="team_image">
                    <img src={item.images} />
                  </div>
                  <div className="team_title">
                    <p>{item.title}</p>
                    <p>{item.compName}</p>
                  </div>
                  <div className="team_text">
                    <h3 className="text_top">{item.name}</h3>
                    <h3>{item.city}</h3>
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
