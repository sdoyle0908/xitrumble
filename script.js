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

    // loop through time blocks

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
  $("#hr9 .description").val(localStorage.getItem("hr9"));
  $("#hr10 .description").val(localStorage.getItem("hr10"));
  $("#hr11 .description").val(localStorage.getItem("hr11"));
  $("#hr12 .description").val(localStorage.getItem("hr12"));
  $("#hr13 .description").val(localStorage.getItem("hr13"));
  $("#hr14 .description").val(localStorage.getItem("hr14"));
  $("#hr15 .description").val(localStorage.getItem("hr15"));
  $("#hr16 .description").val(localStorage.getItem("hr16"));
  $("#hr17 .description").val(localStorage.getItem("hr17"));

  trackHours();
});
