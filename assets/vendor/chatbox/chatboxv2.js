const messagesContainer = document.querySelector('.messages');
const messageInput = document.querySelector('#message-input');

function showTypingBubbles() {
  const typingBubbles = document.createElement('div');
  typingBubbles.textContent = 'Typing...';
  typingBubbles.classList.add('message', 'typing');
  messagesContainer.appendChild(typingBubbles);

  setTimeout(() => {
    messagesContainer.removeChild(typingBubbles);
    sendMessage("Hello! How can I assist you?");
  }, 3000);
}

function sendMessage(text) {
  const userMessage = document.createElement('div');
  userMessage.textContent = text;
  userMessage.classList.add('message', 'user');
  messagesContainer.appendChild(userMessage);

  showTypingBubbles();
}

messageInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const userText = messageInput.value;
    sendMessage(userText);
    messageInput.value = '';
  }
});

sendMessage("Welcome! Please provide your information:");