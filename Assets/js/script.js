// Selects element by class
$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
    localStorage.setItem(time, text);
  });

  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
    var curHour = moment().hour();
    $(".time-block").each(function (index, value) {
      console.log($(value).attr("id").split("hour")[1]);
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      if (blockHour < curHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === curHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourTracker();
});
