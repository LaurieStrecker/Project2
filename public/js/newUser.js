// Get references to page elements
/* var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list"); */

// The API object contains methods for each kind of request we'll make
/* var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/students",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/students",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/students/" + id,
      type: "DELETE"
    });
  }
}; */

// refreshExamples gets new examples from the db and repopulates the list
/* var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/students/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
}; */

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
/* var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick); */

$("#submit").on("click", function(event) {
  event.preventDefault();
  console.log(event);
  var lastName = $("#lastName")
    .val()
    .trim();
  var firstName = $("#firstName")
    .val()
    .trim();
  var phone = $("#phone")
    .val()
    .trim();
  var termType = $("#termType")
    .val()
    .trim();
  var endDate = $("#endDate")
    .val()
    .trim();
  var cipCode = $("#cipCode")
    .val()
    .trim();
  var schoolName = $("#schoolName")
    .val()
    .trim();
  var startDate = $("#startDate")
    .val()
    .trim();
  var edLvl = $("#edLvl")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();

  var newStudent = {
    firstname: firstName,
    lastname: lastName,
    phone: phone,
    school_name: schoolName,
    qt_sem: termType,
    program_start: startDate,
    program_end: endDate,
    ed_level: edLvl,
    cip_code_one: cipCode,
    email: email
  };

  console.log(newStudent);

  // use a post call to save all student info to our mysql db
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    url: "/api/students",
    type: "POST",
    data: JSON.stringify(newStudent)
  }).then(function(res) {
    console.log(res);
    console.log("info saved to database");
  });
});
