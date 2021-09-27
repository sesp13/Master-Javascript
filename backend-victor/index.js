const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
var app = require('./app');
var port = 3700;

mongoose
  .connect(
    process.env.MONGOCONN,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(() => {
    console.log(
      'Conexión a la base de datos establecida satisfactoriamente...'
    );

    // Creacion del servidor
    app.listen(port, () => {
      console.log('Servidor corriendo correctamente en la url: localhost:3700');
    });
  })
  .catch((err) => console.log(err));
