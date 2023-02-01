
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //var saveButton = document.getElementsByClassName('row time-block past');


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
