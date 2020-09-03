import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      mobile: "",
      message: "",
      nameError: "",
    };
  }
  /*handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleMobile = (event) => {
    this.setState({ mobile: event.target.value });
  };
  handleMessage = (event) => {
    this.setState({ message: event.target.value });
  };*/
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    //alert(JSON.stringify(this.state));
    event.preventDefault();
  };
  componentDidMount = () => {
    const validation = () => {
      //name validation;
      let name = document.querySelector(".user_name").value;
      let name_check = /^[A-Za-z. ]{4,30}$/;
      if (name_check.test(name)) {
        document.querySelector(".name_error").innerHTML = "";
      } else {
        document.querySelector(".name_error").innerHTML =
          "**user name is invalid !";
        return false;
      }
      //email validation;
      let email = document.querySelector(".user_email").value;
      let email_check = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (email_check.test(email)) {
        document.querySelector(".email_error").innerHTML = "";
      } else {
        document.querySelector(".email_error").innerHTML =
          "** please fill the valid email id !";
        return false;
      }
      //number validation;
      let number = document.querySelector(".user_mobile").value;
      let number_check = /^\d{10}$/;
      if (number_check.test(number)) {
        document.querySelector(".mobile_error").innerHTML = "";
      } else {
        document.querySelector(".mobile_error").innerHTML =
          "** please fill the valid number !";
        return false;
      }

      //message validation;
      let message = document.querySelector(".user_message").value;
      let message_check = /^[A-Za-z. ]{10,100}$/;
      if (message_check.test(message)) {
        document.querySelector(".message_error").innerHTML = "";
      } else {
        document.querySelector(".message_error").innerHTML =
          "** please text your message here !";
        return false;
      }
    };
    document.querySelector(".maddyForm").addEventListener("click", validation);
  };
  render() {
    return (
      <>
        <form
          action=""
          target="_parent"
          method="get"
          onSubmit={this.handleSubmit}
        >
          <div className="name_user">
            <label htmlFor="name">name</label>
            <br />
            <input
              className="user_name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <span className="name_error">{this.state.nameError}</span>
            <br />
          </div>
          <div className="email_user">
            <label htmlFor="email">email</label>
            <br />
            <input
              className="user_email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <span className="email_error"></span>
            <br />
          </div>
          <div className="password_user">
            <label htmlFor="password">password</label>
            <br />
            <input
              className="user_password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <span className="password_error"></span>
            <br />
          </div>
          <div className="mobile_user">
            <label htmlFor="mobile">mobile</label>
            <br />
            <input
              className="user_mobile"
              type="text"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
            <br />
            <span className="mobile_error"></span>
            <br />
          </div>
          <div className="message_user">
            <label htmlFor="message">message</label>
            <br />
            <textarea
              className="user_message"
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
            <br />
            <span className="message_error"></span>
          </div>
          <div className="form_button">
            <input type="reset" name="reset" value="reset" />
            <input
              className="maddyForm"
              type="submit"
              name="submit"
              value="send"
            />
          </div>
        </form>
      </>
    );
  }
}
