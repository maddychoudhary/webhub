import React, { Component } from "react";
import "./Title.css";
const Title = ({ title }) => {
  return (
    <>
      <div className="section_title">
        <h3>{title}</h3>
      </div>
    </>
  );
};
export default Title;
