// Selects element by class
//var today = moment();
//$("#currentday").text(today.format("DDDDD, MMMM Do"));
var currentDay = moment(today).format('MMMM Do YYYY');
// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 30;

function setTime() {
  // Sets interval in variableSU
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

$(function() {  
  $("#button").click(function() { 
       $("#button").addClass("onclic", 250, validate); 
       });
      })