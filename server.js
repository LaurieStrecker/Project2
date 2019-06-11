require("dotenv").config();
var express = require("express");
var passport = require("passport");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
// var env = require("dotenv").load();

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// // Google auth
// var GOOGLE_CLIENT_ID =
//   "30634033579-46upcq5quevugp6473gqqo79hbn2vomk.apps.googleusercontent.com";
// var GOOGLE_CLIENT_SECRET = "e6chWqv2hQ_dB6Ju6hX6yEx-";

// // Passport session setup.
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

// Use the GoogleStrategy within Passport.
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/callback",
//       passReqToCallback: true
//     },
//     function(request, accessToken, refreshToken, profile, done) {
//       // asynchronous verification, for effect...
//       process.nextTick(function() {
//         return done(null, profile);
//       });
//     }
//   )
// );

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(express.static(__dirname + "/public"));

// Routes
require("./routes/student-api-routes")(app);
require("./routes/html-routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
