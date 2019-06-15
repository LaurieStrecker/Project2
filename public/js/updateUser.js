//grab user info and post to our updateUser page
function getUser() {
  $.ajax({
    url: "api/students/4",
    type: "GET"
  }).then(function(res) {
    console.log(res);
    $("#lastName").val(res.lastname);
    $("#firstName").val(res.firstname);
    $("#email").val(res.email);
    $("#phone").val(res.phone);
    $("#schoolName").val(res.school_name);
    $("#startDate").val(res.program_start);
    $("#endDate").val(res.program_end);
    $("#edLvl").val(res.ed_level);
    $("#termType").val(res.qt_sem);
    $("#cipCode").val(res.cip_code_one);
  });
}

getUser();

//update user info event
$("#updateInfo").on("click", function(event) {
  event.preventDefault();
  console.log(event);

  // Form validation
  function validateForm() {
    var isValid = true;
    $("#lastName").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please enter your last name.");
      }
    });
    $("#firstName").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please enter your first name.");
      }
    });
    // email address validation
    $("#email").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please enter a valid email address.");
      }
    });
    //phone number validation
    $("#phone").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please enter your phone number.");
      }
    });
    $("#schoolName").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please enter the name of your school.");
      }
    });
    $("#termType").each(function() {
      if ($(this).val() === "Select One") {
        isValid = false;
        alert("Please select your school's academic term type.");
      }
    });
    $("#startDate").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please select your start date as listed on your I-20.");
      }
    });
    $("#endDate").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please select your end date as listed on your I-20.");
      }
    });
    $("#edLvl").each(function() {
      if ($(this).val() === "Select One") {
        isValid = false;
        alert("Please select your education level.");
      }
    });
    //cip code validation
    $("#cipCode").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        alert("Please enter your CIP Code.");
      }
    });
    return isValid;
  }

  if (validateForm()) {
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

    var updateUser = {
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

    console.log(updateUser);

    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/students/1",
      type: "PUT",
      data: JSON.stringify(updateUser)
    }).then(getUser);
  }
});

//delete user from db
$("#userDelete").on("click", function(event) {
  event.preventDefault();
  console.log(event);
  $.ajax({
    url: "/api/students/8",
    type: "DELETE"
  }).then(function() {
    console.log("deleting user");
    window.location = "/";
  });
});

//update ajax call
/* function updateUser(id) {
  $.ajax({
    url: "api/students/" + id,
    type: "PUT"
  }).then(getUser);
}

updateUser(thing); */
