(function () {
    const chatButton = document.getElementById('chatbot-button');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatStatus = document.getElementById('chat-status');

    const appendMessage = (text, type) => {
        const msg = document.createElement('div');
        msg.className = `chat-message ${type}`;
        msg.textContent = text;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const setStatus = (text) => {
        chatStatus.textContent = text || '';
    };

    const toggleChat = (open) => {
        if (open) {
            chatWindow.style.display = 'flex';
            chatInput.focus();
        } else {
            chatWindow.style.display = 'none';
        }
    };

    const sendMessage = async () => {
        const message = (chatInput.value || '').trim();
        if (!message) return;

        appendMessage(message, 'user');
        chatInput.value = '';
        setStatus('Thinking...');

        try {
            const res = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, source: 'services' })
            });

            if (!res.ok) {
                throw new Error('Request failed');
            }

            const data = await res.json();
            const reply = data.reply || data.error || 'Sorry, no response right now.';
            appendMessage(reply, 'bot');
            setStatus('');
        } catch (err) {
            appendMessage('Sorry, something went wrong. Please try again later.', 'bot');
            setStatus('');
        }
    };

    chatButton?.addEventListener('click', () => toggleChat(true));
    chatClose?.addEventListener('click', () => toggleChat(false));
    chatSend?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
})();
