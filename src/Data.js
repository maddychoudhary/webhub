import React, { Component } from "react";
import { Provider } from "./Context.js";
import project1 from "./images/choudhary.PNG";
import project2 from "./images/ondesk-it.PNG";
import project3 from "./images/onican.PNG";
import project4 from "./images/sathi-school.PNG";
import project5 from "./images/portfolio.PNG";
import project6 from "./images/mc it solution.PNG";
import project7 from "./images/webhub.PNG";
import project8 from "./images/webhub.PNG";

export default class Data extends Component {
  state = {
    projects: [
      { image: project1, name: "project1", heading: "hotel choudhary" },
      { image: project2, name: "project2", heading: "ondesk it solution" },
      { image: project3, name: "project3", heading: "onican" },
      { image: project4, name: "project4", heading: "sathi school" },
      { image: project5, name: "project5", heading: "my portfolio_1" },
      { image: project6, name: "project6", heading: "mc it solution" },
      { image: project7, name: "project7", heading: "web hub" },
      { image: project8, name: "project8", heading: "my portfolio_2" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Provider value={this.state.projects}>{this.props.children}</Provider>
      </React.Fragment>
    );
  }
}
