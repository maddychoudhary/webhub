import React, { Component } from "react";
import Form from "./Form.js";
import Title from "./Title.js";
export default class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form_section">
          <div className="team_heading">
            <Title title="contacts" />
          </div>
          <div className="form_container">
            <Form />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
