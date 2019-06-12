var db = require("../models");

module.exports = function(app) {
  app.get("/api/students/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Students.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // create method called to create a new user within our db
  app.post("/api/students", function(req, res) {
    db.Students.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
      console.log(dbStudent);
    });
  });

  app.delete("/api/students/:id", function(req, res) {
    db.Students.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
};
