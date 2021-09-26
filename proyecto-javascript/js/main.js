$(document).ready(function () {
  $(function () {
    //Slider
    if (window.location.href.indexOf("index") > -1) {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
      });
    }
  });

  if (window.location.href.indexOf("index") > -1) {
    //Posts dinámicos
    var posts = [
      {
        title: "Prueba de título",
        date: `Publicado el día ${moment().date()} del mes ${moment().format(
          "MMMM"
        )} del año ${moment().format("YYYY")}`,
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione tempore dicta, eos
          deserunt libero possimus rerum esse nobis optio quos obcaecati odio suscipit, error, consequatur
          commodi. Quas, error quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          esse sit assumenda aut numquam voluptatum ipsa repudiandae tempora tempore, iusto at nam a
          nostrum officiis corporis sed dolore adipisci vitae?`,
      },
      {
        title: "Prueba de título 2",
        date: `Publicado el día ${moment().date()} del mes ${moment().format(
          "MMMM"
        )} del año ${moment().format("YYYY")}`,
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione tempore dicta, eos
          deserunt libero possimus rerum esse nobis optio quos obcaecati odio suscipit, error, consequatur
          commodi. Quas, error quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          esse sit assumenda aut numquam voluptatum ipsa repudiandae tempora tempore, iusto at nam a
          nostrum officiis corporis sed dolore adipisci vitae?`,
      },
      {
        title: "Prueba de título 3",
        date: `Publicado el día ${moment().date()} del mes ${moment().format(
          "MMMM"
        )} del año ${moment().format("YYYY")}`,
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione tempore dicta, eos
          deserunt libero possimus rerum esse nobis optio quos obcaecati odio suscipit, error, consequatur
          commodi. Quas, error quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          esse sit assumenda aut numquam voluptatum ipsa repudiandae tempora tempore, iusto at nam a
          nostrum officiis corporis sed dolore adipisci vitae?`,
      },
      {
        title: "Prueba de título 4",
        date: `Publicado el día ${moment().date()} del mes ${moment().format(
          "MMMM"
        )} del año ${moment().format("YYYY")}`,
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione tempore dicta, eos
          deserunt libero possimus rerum esse nobis optio quos obcaecati odio suscipit, error, consequatur
          commodi. Quas, error quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          esse sit assumenda aut numquam voluptatum ipsa repudiandae tempora tempore, iusto at nam a
          nostrum officiis corporis sed dolore adipisci vitae?`,
      },
    ];

    posts.forEach((item, index) => {
      var post = `
    <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>${item.content}</p>
      <a href="" class="button-more">Leer más</a>
    </article>
    `;
      $("#posts").append(post);
    });
  }
  // Selector de tema
  var styles = $("#theme");

  //Recordar mi seteado con el tema
  var theme = localStorage.getItem("theme");
  if (theme != null) {
    styles.attr("href", `css/${theme}.css`);
  }

  $("#to-green").click(function () {
    styles.attr("href", "css/green.css");
    localStorage.setItem("theme", "green");
  });

  $("#to-red").click(function () {
    styles.attr("href", "css/red.css");
    localStorage.setItem("theme", "red");
  });

  $("#to-blue").click(function () {
    styles.attr("href", "css/blue.css");
    localStorage.setItem("theme", "blue");
  });

  //Scroll hacia arriba suavizado
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );

    return false;
  });

  //Login falso
  $("#login form").submit(function () {
    var nombre = $("#formName").val();
    localStorage.setItem("formName", nombre);
  });

  var formName = localStorage.getItem("formName");
  if (formName != null) {
    var aboutParrafo = $("#about p");
    aboutParrafo.html("<strong> Bienvenido: <br>" + formName + "</strong>");
    aboutParrafo.append("<br> <a href='#' id='logout'> Cerrar sesión </a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.removeItem("formName");
      location.reload();
    });
  }
});
