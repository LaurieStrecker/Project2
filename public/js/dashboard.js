// var newUserQuery = "ueul"
// // $("#firstNameDisplay").append("Cleatus");
// // $("#schoolNameDisplay").append("Pudget Sound University");
// // $("#edLvlDisplay").append("Associate's");
// // $("#majorDisplay").append("Business");
// // $("#prgEndDisplay").append("June 19, 2022");

//pull data from db and display in our stuInfo container

$.ajax({
  url: "api/students/1", //pull this id from the database
  type: "GET"
}).then(function(res) {
  console.log(res);
  $("#schoolNameDisplay").append(res.school_name);
  $("#edLvlDisplay").append(res.ed_level);
  $("#majorDisplay").append(res.cip_code_one);
  $("#prgEndDisplay").append(res.program_end);
});

//delete user data based on the user ID
/* $.ajax({
  url: "api/students" + id,
  type: "DELETE",
}).then(function(res) {
  console.log(res);
}); */
