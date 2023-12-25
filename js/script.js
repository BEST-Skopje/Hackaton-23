document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("Dec 22, 2023 00:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = days >= 0 ? (days < 10 ? "0" + days : days) : "00";
    hours = hours >= 0 ? (hours< 10 ? "0" + hours : hours) : "00";
    minutes = minutes >= 0 ? (minutes < 10 ? "0" + minutes : minutes) : "00";
    seconds = seconds >= 0 ? (seconds < 10 ? "0" + seconds : seconds) : "00";

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
});
