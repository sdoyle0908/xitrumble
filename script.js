$(document).ready(function () {
  // Display current day & time

  var todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);

  // Save button & click event
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function trackHours() {
    var currentTime = moment().hour();

    // loop

    $(".time-block").each(function () {
      var thisHour = parseInt($(this).attr("id").split("hr")[1]);

      // time checker for past, present or future

      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");

      if (thisHour < currentTime) {
        $(this).addClass("past");
      } else if (thisHour === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // get item from local storage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  trackHours();
});
