
$(function () {

  $(document).ready(function(event){
    event.preventDefault();
    $(".saveBtn").on("click", function() {
      localStorage.setItem($(this).prop("id"), $(this).prev().val());
      console.log(localStorage.getItem($(this).prop("id")));
    })
  });
  

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));

  var currentHour = today.format('H');
  if (currentHour == 17) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block past";
    document.getElementById("hour-2").className = "row time-block past";
    document.getElementById("hour-3").className = "row time-block past";
    document.getElementById("hour-4").className = "row time-block past";
    document.getElementById("hour-5").className = "row time-block present";
  }
  else if (currentHour == 16) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block past";
    document.getElementById("hour-2").className = "row time-block past";
    document.getElementById("hour-3").className = "row time-block past";
    document.getElementById("hour-4").className = "row time-block present";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 15) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block past";
    document.getElementById("hour-2").className = "row time-block past";
    document.getElementById("hour-3").className = "row time-block present";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 14) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block past";
    document.getElementById("hour-2").className = "row time-block present";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 13) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block present";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 12) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block present";
    document.getElementById("hour-1").className = "row time-block future";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 11) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block present";
    document.getElementById("hour-12").className = "row time-block future";
    document.getElementById("hour-1").className = "row time-block future";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 10) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block present";
    document.getElementById("hour-11").className = "row time-block future";
    document.getElementById("hour-12").className = "row time-block future";
    document.getElementById("hour-1").className = "row time-block future";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour == 9) {
    document.getElementById("hour-9").className = "row time-block present";
    document.getElementById("hour-10").className = "row time-block future";
    document.getElementById("hour-11").className = "row time-block future";
    document.getElementById("hour-12").className = "row time-block future";
    document.getElementById("hour-1").className = "row time-block future";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour < 9 ) {
    document.getElementById("hour-9").className = "row time-block future";
    document.getElementById("hour-10").className = "row time-block future";
    document.getElementById("hour-11").className = "row time-block future";
    document.getElementById("hour-12").className = "row time-block future";
    document.getElementById("hour-1").className = "row time-block future";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  }
  else if (currentHour > 17) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block past";
    document.getElementById("hour-2").className = "row time-block past";
    document.getElementById("hour-3").className = "row time-block past";
    document.getElementById("hour-4").className = "row time-block past";
    document.getElementById("hour-5").className = "row time-block past";
  }

});
