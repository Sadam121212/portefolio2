const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const methodOverride = require("method-override");

var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
  "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";

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

const hostname = "127.0.0.1";
const port = 3001;

app.use(morgan());

app.use(bodyParser.json());

app.use(methodOverride());
const allowCrossDomain = function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, x-auth-token"
    );
  }

  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
app.post("/mail", (req, res) => {
  sendSmtpEmail.to = [{ email: "fatima.skandrani98@gmail.com" }];
  sendSmtpEmail.sender = {
    email: "fatima.skandrani98@gmail.com",
    name: "Fatima Skandrani",
  };
  sendSmtpEmail.templateId = 1;
  sendSmtpEmail.params = req.body;
  apiInstance
    .sendTransacEmail(sendSmtpEmail)
    .then(
      function (data) {
        return res.status(200).json(data);
      },
      function (error) {
        return res.status(400).json(error.message);
      }
    )
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Une erreur s'est produite lors de l'envoi du mail" });
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
