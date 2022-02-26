import React from "react";
import axios from "axios";

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
    return (
      <div className="section">
        <h2 className="title">Contact Us</h2>
        <div className="container">
          {/* <hr /> */}
          <form
            id="contact-form"
            onSubmit={this.submitEmail.bind(this)}
            method="POST"
            className="form-container"
          >
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <input
                    placeholder="Name"
                    id="name"
                    type="text"
                    className="form-control"
                    required
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Email"
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
            </div>
            <div className="form-group">
              <input
                placeholder="Subject"
                id="subject"
                type="text"
                className="form-control"
                required
                value={this.state.subject}
                onChange={this.onSubjectChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                id="message"
                className="form-control"
                rows="1"
                required
                value={this.state.message}
                onChange={this.onMsgChange.bind(this)}
              />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
