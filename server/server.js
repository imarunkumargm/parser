const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.listen(3001, function() {
  console.log("Node is running on 3001");
});

var userData;

app.post("/api/updateUsername", function(req, res) {
  userData = req.body.name;
  console.log("Post");
  res.send({ status: "updated" });
});

app.get("/api/getUsername", function(req, res) {
  console.log("Get");
  res.send({ username: userData });
});
