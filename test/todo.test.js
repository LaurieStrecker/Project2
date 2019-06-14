var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/students/3", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    db.Students.bulkCreate([
      {
        firstname: "First name",
        lastname: "Last name",
        username: "username",
        password: "password",
        cip_code_one: "11.0101",
        email: "email",
        phone: "phone",
        school_name: "school name",
        qt_sem: "qt sem",
        program_start: "2019-06-11",
        program_end: "2019-06-30",
        last_login: "2019-05-30",
        stats: "status"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/students/3").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response
        expect(responseBody.id).to.equal("3");
        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
