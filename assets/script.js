$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, task);
  });

  function timeCode () {
  var currentTime =  dayjs().hour();
  $(".time-block").each(function () {  
    var workHour = parseInt($(this).attr("id").split()[0]);
    if (workHour === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else if (workHour < currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));

  function displayDate() {
    var today = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a"); 
    $("#currentDay").text(today);
    }
    displayDate();
    setInterval(displayDate, 1000);

  $(".clearBtn").on("click", function() {
  localStorage.clear();
  location.reload();
    })

  timeCode();
});
