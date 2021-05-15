$(document).ready(function () {
  // Display current day & time

  var todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);
});
