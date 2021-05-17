$(document).ready(function () {
  // Display current day & time

  var todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);

  // Save button & click event

  $(document).ready(function () {
    var text = $(this).sibiling(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function trackHours() {
    var currentTime = moment().hour();

    // loop

    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

      // time checker for past, present or future

      if (hourBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (hourBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  trackHours();
});
