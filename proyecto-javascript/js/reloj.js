$(document).ready(function () {
  setInterval(function () {
    var reloj = moment().format("h:mm:ss");
    $("#reloj").html(reloj);
  }, 1000);
});
