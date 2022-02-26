const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// app.post("/", (req, res) => {
//   console.log(req.body);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "mmicherdacsk@gmail.com",
//       pass: "90michal96!@",
//     },
//   });

//   const mailOptions = {
//     from: req.body.email,
//     to: "mmicherdacsk@gmail.com",
//     subject: `Wiadomość od ${req.body.email}: ${req.body.subject}`,
//     text: req.body.message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (
//       req.body.message === "" ||
//       req.body.subject === "" ||
//       req.body.email === "" ||
//       req.body.name === ""
//     ) {
//       res.send(error);
//     } else {
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           res.send("error");
//         } else {
//           res.send("success");
//         }
//       });
//     }
//   });
// });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res, next) => {
  console.log(req.body);

  var mail = {
    from: req.body.email,
    to: "mmicherdacsk@gmail.com",
    subject: `Wiadomość od ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
