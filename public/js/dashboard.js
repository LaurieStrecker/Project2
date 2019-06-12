// var newUserQuery = "ueul"
// // $("#firstNameDisplay").append("Cleatus");
// // $("#schoolNameDisplay").append("Pudget Sound University");
// // $("#edLvlDisplay").append("Associate's");
// // $("#majorDisplay").append("Business");
// // $("#prgEndDisplay").append("June 19, 2022");

$.ajax({
  headers: {
    "Content-Type": "application/json"
  },
  url: "api/students/:id",
  type: "GET"
}).then(function(res) {
  console.log(res);
});
