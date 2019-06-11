var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  app.get("/api/students", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Student.findAll({
      include: [db.Post]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

=======
>>>>>>> master
  app.get("/api/students/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Student.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  app.post("/api/students", function(req, res) {
    db.Student.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  app.delete("/api/students/:id", function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
};
