var path = require("path");
// var auth = require("../config/passport-setup.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log("i hit '/'");
    // console.log(path.join(__dirname, "../public/login.html"));

    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // // new user route loads user creation page
  app.get("/newuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
  });

  // dashboard route loads user info page
  app.get("/dashboard", function(req, res) {
    console.log("i hit 'dashboard'");
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  // new user route loads user info update page
  app.get("/updateUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/updateUser.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendStatus("404");
  });
};
