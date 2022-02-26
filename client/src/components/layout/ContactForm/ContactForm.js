import React from "react";
import axios from "axios";
import phone from "../../../phone.svg";
import mail from "../../../mail.svg";
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }
  submitEmail(e) {
    e.preventDefault();
    let data = this.state;

    axios({
      method: "POST",
      url: "https://template1232.herokuapp.com/send",
      data: data,
      headers: { "content-type": "application/json" },
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
    })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }
  render() {
    const {
      name,
      email,
      subject,
      message,
      submit,
      phoneTitle,
      phoneNumber,
      emailAddress,
      emailTitle,
    } = this.props;
    return (
      <div className="section-contact">
        <h2 className="title">{this.props.title}</h2>
        <div className="container flex-container">
          <form
            id="contact-form"
            onSubmit={this.submitEmail.bind(this)}
            method="POST"
            className="form-container"
          >
            <div className="form-group">
              <label>{name}</label>
              <div className="col-md-6">
                <input
                  placeholder={name}
                  id="name"
                  type="text"
                  className="form-control"
                  required
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <label>{email}</label>
              <div className="col-md-6">
                <input
                  placeholder={email}
                  id="email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>{subject}</label>
              <input
                placeholder={subject}
                id="subject"
                type="text"
                className="form-control"
                required
                value={this.state.subject}
                onChange={this.onSubjectChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>{message}</label>
              <textarea
                placeholder={message}
                id="message"
                className="form-control"
                rows="1"
                required
                value={this.state.message}
                onChange={this.onMsgChange.bind(this)}
              />
            </div>
            <button type="submit" className="submit">
              {submit}
            </button>
          </form>
          <div className="form-info">
            <h6>{phoneTitle}</h6>
            <a href="/">
              <img src={phone} alt="" />
              {phoneNumber}
            </a>
            <h6>{emailTitle}</h6>

            <a href="/">
              <img src={mail} alt="" />
              {emailAddress}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
