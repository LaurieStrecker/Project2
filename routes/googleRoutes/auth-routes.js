var passport = require("passport");
var db = require("../../models");

// console.log("google auth routes");

module.exports = function(app) {
  app.get("/auth/logout", function(req, res) {
    //handle with passport
    res.send("logging out");
  });

  // This is where users point their browsers in order to get logged in
  // This is also where Google sends back information to our app once a user authenticates with Google
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/",
      session: true,
      scope: ["profile", "email"]
    }),
    (req, res) => {
      var studentGoogObj = req.user._json;
      // console.log("wooo we authenticated, here is our user object:", req.user);
      // res.json(req.user);
      console.log(req.user._json);

      //look up in db user google = req.user._json.sub
      db.Students.findOne({
        where: {
          googleId: studentGoogObj
        }
      }).then(function(dbStudent) {
        //if user does not exists send to newuser
        if (dbStudent) {
          res.redirect("https://frozen-spire-30925.herokuapp.com/dashboard");
          //if user exists send to dashboard
        } else {
          res.redirect("https://frozen-spire-30925.herokuapp.com/newUser");
        }
        console.log(dbStudent);
        // res.json(dbStudent);
      });
  
      
    }
  );
};
