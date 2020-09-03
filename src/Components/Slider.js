import React, { Component } from "react";
import "./Slider.css";
import $ from "jquery";
import slide1 from "../images/slider5.jpg";
import slide2 from "../images/slider6.jpg";
import slide4 from "../images/slider8.jpg";

export default class Slider extends Component {
  componentDidMount = () => {
    let slider = document.querySelector(".banner_slider").children;
    let leftArrow = document.querySelector(".left_arrow");
    let rightArrow = document.querySelector(".right_arrow");
    let circle = document.querySelector(".slider_circle");
    let slideIndex = 0;

    setInterval(runSlider, 3000);
    function runSlider() {
      if (slideIndex == slider.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
      }
      slider[slideIndex].classList.add("active");
      circleIndecator();
    }

    const goLeft = () => {
      if (slideIndex == 0) {
        slideIndex = slider.length - 1;
      } else {
        slideIndex--;
      }
      for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
      }
      slider[slideIndex].classList.add("active");
      circleIndecator();
    };

    const goRight = () => {
      if (slideIndex == slider.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
      }
      slider[slideIndex].classList.add("active");
      circleIndecator();
    };

    leftArrow.addEventListener("click", goLeft);
    rightArrow.addEventListener("click", goRight);

    const circleUpdate = () => {
      for (let i = 0; i < slider.length; i++) {
        let div = document.createElement("div");
        let divText = document.createTextNode("");
        div.appendChild(divText);
        circle.appendChild(div);
        if (i == 0) {
          div.classList.add("active");
        }
      }
    };
    circleUpdate();
    const circleIndecator = () => {
      for (let i = 0; i < slider.length; i++) {
        circle.children[i].classList.remove("active");
      }
      circle.children[slideIndex].classList.add("active");
    };
  };
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="banner_slider">
            <div className="slide active">
              <div className="slide_image">
                <img src={slide1} alt="slide-1" />
              </div>
              <div className="slide_text">
                <h3>front end developer</h3>
                <p>React js</p>
                <a href="#">hire me</a>
              </div>
            </div>
            <div className="slide">
              <div className="slide_image">
                <img src={slide2} alt="slide-1" />
              </div>
              <div className="slide_text">
                <h3>responsive web design</h3>
                <p>javascript</p>
                <a href="#">hire me</a>
              </div>
            </div>
            <div className="slide">
              <div className="slide_image">
                <img src={slide4} alt="slide-1" />
              </div>
              <div className="slide_text">
                <h3>web and mobile application</h3>
                <p>jquery</p>
                <a href="#">hire me</a>
              </div>
            </div>
          </div>
          <div className="left_arrow">
            <a href="#">
              <i className="fas fa-angle-double-left"></i>
            </a>
          </div>
          <div className="right_arrow">
            <a href="#">
              <i className="fas fa-angle-double-right"></i>
            </a>
          </div>
          <div className="slider_circle"></div>
        </div>
      </React.Fragment>
    );
  }
}
