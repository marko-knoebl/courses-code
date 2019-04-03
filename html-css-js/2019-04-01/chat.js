const messageView = document.getElementById('message-view');
const newMessageBtn = document.getElementById('new-message-btn');
const newMessageInput = document.getElementById('new-message-input');

let messageOrigin;
for (let i = 0; i < 20; i++) {
  if (Math.random() <= 0.5) {
    addReceivedMessage('hello')
  } else {
    addSentMessage('hi')
  }
}

function onNewMessageBtnClick(event) {
  // Inhalt des Input-Elements als neue Nachricht
  // hinzufügen
  event.preventDefault();
  const newMessage = newMessageInput.value;
  addSentMessage(newMessage);
  newMessageInput.value = '';
}

newMessageBtn.addEventListener('click', onNewMessageBtnClick)

function addMessage(text, origin) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = text;
  messageElement.classList.add('message');
  messageElement.classList.add(origin);
  messageView.appendChild(messageElement);
  messageElement.scrollIntoView();
}

function addSentMessage(text) {
  addMessage(text, 'sent');
}

function addReceivedMessage(text) {
  addMessage(text, 'received');
}

addMessage('hello world', 'received');
addMessage('howdy', 'sent');

addSentMessage('abc')
addReceivedMessage('xyz');