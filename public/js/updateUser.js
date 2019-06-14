function getUser() {
  $.ajax({
    url: "api/students/5",
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
});

//update ajax call
/* function updateUser(id) {
  $.ajax({
    url: "api/students/" + id,
    type: "PUT"
  }).then(getUser);
}

updateUser(thing); */
