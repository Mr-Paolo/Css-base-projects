const btnSend = document.querySelector('.btn.send')
const addMessage = (message, senderOrReceived) => {
    const chatMessagesEl = document.querySelector('.chat-messages')

    chatMessagesEl.innerHTML = chatMessagesEl.innerHTML + `
    <div class="message-container ${senderOrReceived}">
        <div class="message-content">
            ${message}
        </div>
    </div>
    `
}

btnSend.onclick= () => {
    const messageValue = document.querySelector('input').value
    
    addMessage(messageValue, 'sended' )

    setTimeout( () => {
        addMessage("I'll do it later", 'received')
    },  2000)
}