import React, { Component } from "react";
import Slider from "./Slider.js";
import Title from "./Title.js";
import "./Home.css";
import about1 from "../images/about_img.jpg";
import { Link } from "react-router-dom";
import { Consumer } from "../Context.js";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import Form from "./Form.js";

export default class Home extends Component {
  state = {
    services: [
      {
        icon: <i className="fab fa-adobe"></i>,
        title: "web design",
        info:
          "Web Hub are experts in getting your brand ready to connect deeply with the ones that matter in order for you to grow your business faster and easier. We create tremendous opportunity for your brand if you have the vision to see it that way and the expertise to act on it,Web Hub.",
        more: "read more",
      },
      {
        icon: <i className="fas fa-adjust"></i>,
        title: "web development",
        info:
          "Web Hub specializes in rendering customized react web development. Our React website developers have gained huge experience through developing more over than 20 react based websites of different profiles.Our developers have grown in expertise, experience, and management. ",
        more: "read more",
      },
      {
        icon: <i className="fas fa-anchor"></i>,
        title: "mobile application",
        info:
          "Web Hub has a highly experienced team and we have more than of 5+ years working industry experience on the latest technologies.Our Android app designers and developers gives you amazing user experience for the success of your app.Web Hub make sure the Android apps we deliver are flawless, reliable.",
        more: "read more",
      },
      {
        icon: <i className="fab fa-accusoft"></i>,
        title: "responsive app",
        info:
          "Bringing Your Android App ideas into life.We deliver highest level of customer service. Our team excels in Customized Native Android Mobile App Development that is known to result in Android apps that are famous for their robust code, spectacular designs, responsiveness, scalability.",
        more: "read more",
      },
    ],
    skills: [
      { name: "react application", blank: "" },
      { name: "mobile application", blank: "" },
      { name: "web application", blank: "" },
      { name: "responsive  web ", blank: "" },
    ],
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
  static contextType = Consumer;
  render() {
    const value = this.context;

    return (
      <>
        {/*slider-section-start */}
        <Slider />
        {/*slider-section-end */}

        {/*about-section-start */}
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
              <div className="about_link">
                <Link to="/About">read more</Link>
              </div>
            </div>
          </div>
        </section>
        {/*about-section-end */}

        {/*servces-section-start */}
        <section className="services_section">
          <Title title="services" />
          <div className="services_container">
            {this.state.services.map((item) => {
              return (
                <div className="services_items">
                  <h3>{item.icon}</h3>
                  <h2>{item.title}</h2>
                  <p>{item.info}</p>
                  <Link to="/Services">{item.more}</Link>
                </div>
              );
            })}
          </div>
        </section>

        {/*servces-section-end */}

        {/*projects-section-start */}
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
        {/*projects-section-end */}

        {/*skills-section-start */}
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
        {/*skills-section-end */}

        {/*team-section-start */}
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
        {/*team-section-end */}

        {/*form-section-start */}
        <div className="form_section">
          <div className="team_heading">
            <Title title="contacts" />
          </div>
          <div className="form_container">
            <Form />
          </div>
        </div>

        {/*form-section-end */}
      </>
    );
  }
}
