const messagesDiv = document.getElementById('messages');
const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = (event) => {
  const botMessage = document.createElement('div');
  botMessage.className = 'message bot';
  botMessage.textContent = `Bot: ${event.data}`;
  messagesDiv.appendChild(botMessage);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const userMessage = userInput.value;

  const userMessageDiv = document.createElement('div');
  userMessageDiv.className = 'message user';
  userMessageDiv.textContent = `You: ${userMessage}` ;
  messagesDiv.appendChild(userMessageDiv);


  socket.send(userMessage);
  userInput.value = '';
}