//Usamos ips para que funcione en la red local
// const socket = io.connect('http://192.168.0.7:6677', {forceNew: true});
const socket = io();

socket.on('messages', (data) => {
  // console.log(data);
  render(data);
});

function render(data) {
  const html = data
    .map((message, index) => {
      return `
      <div class="message">
        <strong>${message.nickname}</strong> dice
        <p>${message.text}</p>
      </div>
    `;
    })
    .join(' ');
  const div_msgs = document.getElementById('messages');
  div_msgs.innerHTML = html;
  div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(body) {
  const message = {
    nickname: document.getElementById('nickname').value,
    text: document.getElementById('text').value,
  };
  document.getElementById('nickname').style.display = 'none';
  socket.emit('add-message', message);
  return false;
}
