import React, { Component } from "react";
import Title from "./Title.js";
import about1 from "../images/about_img.jpg";
import { Link } from "react-router-dom";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <i className="fab fa-adobe"></i>,
        title: "web design",
        info:
          "Web Hub are experts in getting your brand ready to connect deeply with the ones that matter in order for you to grow your business faster and easier. We create tremendous opportunity for your brand if you have the vision to see it that way and the expertise to act on it,Web Hub.",
      },
      {
        icon: <i className="fas fa-adjust"></i>,
        title: "web development",
        info:
          "Web Hub specializes in rendering customized react web development. Our React website developers have gained huge experience through developing more over than 20 react based websites of different profiles.Our developers have grown in expertise, experience, and management. ",
      },
      {
        icon: <i className="fas fa-anchor"></i>,
        title: "mobile application",
        info:
          "Web Hub has a highly experienced team and we have more than of 5+ years working industry experience on the latest technologies.Our Android app designers and developers gives you amazing user experience for the success of your app.Web Hub make sure the Android apps we deliver are flawless, reliable.",
      },
      {
        icon: <i className="fab fa-accusoft"></i>,
        title: "responsive app",
        info:
          "Bringing Your Android App ideas into life.We deliver highest level of customer service. Our team excels in Customized Native Android Mobile App Development that is known to result in Android apps that are famous for their robust code, spectacular designs, responsiveness, scalability.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="services_section">
          <Title title="services" />
          <div className="services_container">
            {this.state.services.map((item) => {
              return (
                <div className="services_items">
                  <h3>{item.icon}</h3>
                  <h2>{item.title}</h2>
                  <p>{item.info}</p>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
