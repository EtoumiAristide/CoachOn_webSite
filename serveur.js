const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/dist/coachon_site_web'));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/coachon_site_web/index.html"));
});

app.listen(process.env.PORT);
