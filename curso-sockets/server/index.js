const express = require('express');
const cors = require('cors');
const app = express();

//Servidor usado para el socket
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Solucionar problemas de cors
// app.use(cors());

//Ruta estatica
app.use(express.static('client'));

//Usar cliente

app.get('/', (req, res) => {
  return res.status(200).send('Hola mundo desde una ruta');
});

const messages = [
  {
    id: 1,
    text: 'Bienvenido al chat privado de socket.io y NodeJs',
    nickname: 'Default Bot',
  },
];

//Uso de sockets
//Recibe las conexiones de los clientes
io.on('connection', (socket) => {
  console.log('Cliente nuevo en el socket: ' + socket.handshake.address);

  //Emitir al cliente
  socket.emit('messages', messages);

  socket.on('add-message', function (data) {
    messages.push(data);

    //Emitir mensaje a todos los clientes
    io.sockets.emit('messages', messages)

  });
});

server.listen(6677, () => {
  console.log('Servidor funcionando en http://localhost:6677');
});
