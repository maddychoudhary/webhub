import React, { Component } from "react";
import Title from "./Title.js";
export default class Skills extends Component {
  state = {
    skills: [
      { name: "react application", blank: "" },
      { name: "mobile application", blank: "" },
      { name: "web application", blank: "" },
      { name: "responsive  web ", blank: "" },
    ],
  };
  componentDidMount = () => {
    let reactApp = document.querySelectorAll(".skills_name")[0].children[0];
    let appPadd = 0;
    let appPer = 0;
    let react_padd = setInterval(() => {
      if (appPadd == 80) {
        clearInterval(react_padd);
      } else {
        appPadd++;
        reactApp.style.paddingLeft = appPadd + "%";
      }
    }, 70);

    let react_text = setInterval(() => {
      if (appPer == 80) {
        clearInterval(react_text);
      } else {
        appPer++;
        reactApp.innerHTML = appPer + "%";
      }
    }, 70);

    let mobileApp = document.querySelectorAll(".skills_name")[1].children[0];
    let mobPadd = 0;
    let mobPer = 0;
    let mobile_padd = setInterval(() => {
      if (mobPadd == 30) {
        clearInterval(mobile_padd);
      } else {
        mobPadd++;
        mobileApp.style.paddingLeft = mobPadd + "%";
      }
    }, 70);

    let mobile_text = setInterval(() => {
      if (mobPer == 30) {
        clearInterval(mobile_text);
      } else {
        mobPer++;
        mobileApp.innerHTML = mobPer + "%";
      }
    }, 70);

    let webApp = document.querySelectorAll(".skills_name")[2].children[0];
    let webPadd = 0;
    let webPer = 0;
    let web_padd = setInterval(() => {
      if (webPadd == 70) {
        clearInterval(web_padd);
      } else {
        webPadd++;
        webApp.style.paddingLeft = webPadd + "%";
      }
    }, 70);

    let web_text = setInterval(() => {
      if (webPer == 70) {
        clearInterval(web_text);
      } else {
        webPer++;
        webApp.innerHTML = webPer + "%";
      }
    }, 70);

    let responsive = document.querySelectorAll(".skills_name")[3].children[0];
    let resPadd = 0;
    let resPer = 0;
    let res_padd = setInterval(() => {
      if (resPadd == 100) {
        clearInterval(res_padd);
      } else {
        resPadd++;
        responsive.style.paddingLeft = resPadd + "%";
      }
    }, 70);

    let res_text = setInterval(() => {
      if (resPer == 100) {
        clearInterval(res_text);
      } else {
        resPer++;
        responsive.innerHTML = resPer + "%";
      }
    }, 70);
  };
  render() {
    return (
      <React.Fragment>
        <section className="skills_section">
          <div className="skills_heading">
            <Title title="skills" />
          </div>
          <div className="skills_container">
            {this.state.skills.map((item) => {
              return (
                <div className="skills_items">
                  <div className="skills_text">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="skills_name">
                    <p>{item.blank}0%</p>
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
