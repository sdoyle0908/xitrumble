$(document).ready(function () {
  // Display current day & time

  var todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);
});

// Save button & click event

$(document).ready(function () {
  var text = $(this).sibiling(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

function trackHours() {
  var currentTime = moment().hour();
}
