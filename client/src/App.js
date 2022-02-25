import React, { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm";

const App = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const sendMail = (e) => {
    e.preventDefault();
    let formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log("sending", formData);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText === "success") {
        alert("Email sent");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        console.log(formData);
        // name = "";
        // email = "";
        // subject = "";
        // message = "";
      } else {
        alert("No sended!");
      }
    };
    xhr.send(JSON.stringify(formData));
  };
  return (
    <div className="App">
      {data}
      <h2 className="contact-form-title">Kontakt</h2>
      <div className="container">
        <form className="form-container">
          <input
            type="text"
            id="name"
            placeholder="Imię"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Adres email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            id="subject"
            placeholder="Temat wiadomości"
            required
            onChange={(event) => setSubject(event.target.value)}
          />
          <textarea
            id="message"
            placeholder="Wiadomość ..."
            required
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <input
            type="submit"
            className="submit"
            value="Wyślij"
            onClick={(e) => sendMail(e)}
          />
        </form>
      </div>
      <ContactForm />
    </div>
  );
};

export default App;
