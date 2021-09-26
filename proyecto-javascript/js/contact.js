$(document).ready(function () {
  //Validacion
  $('form input[name="date"]').datepicker({
    dateFormat: "dd-mm-yy",
  });

  $.validate({
    errorMessagePosition: "top",
    scrollToTopOnError: true,
  });
});
