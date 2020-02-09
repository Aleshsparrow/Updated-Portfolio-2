const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Client = require("./usermodel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// app.get("/", (req, res) => {
//   res.render(html, "index.html")
// })

app.post("/submit", ({body}, res) => {
  Client.create(body)
  console.log(body)
    // .then(dbUser => {
    //   res.json(dbUser);
    //   console.log(dbUser)
    // })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
