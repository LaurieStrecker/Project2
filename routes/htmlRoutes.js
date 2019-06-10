var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Students.all(function(data) {
      var hbsObject = {
        index: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Load example page and pass in an example by id
  app.get("/students/:id", function(req, res) {
    db.Students.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
