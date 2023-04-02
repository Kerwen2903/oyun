var countDownDate = new Date("Jun 1, 2023 00:00:00").getTime();
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML =   " D:" + days 
  document.getElementById("hours").innerHTML = " H:" + hours 
  document.getElementById("mins").innerHTML = " M:" + minutes 
  document.getElementById("secs").innerHTML =  " S:" + seconds
}, 1000)


setInterval(incrementTime, 1000); // call the function every second