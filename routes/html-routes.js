var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // new user route loads newUser.html
  app.get("/newuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
  });

  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status("404");
  });
};
