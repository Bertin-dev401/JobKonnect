function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }
}

function toggleAIChat() {
    const chatWindow = document.getElementById('aiChatWindow');
    chatWindow.classList.toggle('active');
}

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const chatBody = document.getElementById('aiChatBody');

    if (input.value.trim()) {
        const userMessage = document.createElement('div');
        userMessage.className = 'ai-message';
        userMessage.style.background = 'var(--primary-green)';
        userMessage.style.color = 'white';
        userMessage.textContent = input.value;
        chatBody.appendChild(userMessage);

        input.value = '';

        setTimeout(() => {
            const aiResponse = document.createElement('div');
            aiResponse.className = 'ai-message';
            aiResponse.textContent =
                "Thank you for your question! This AI assistant will be connected to provide personalized career guidance. Stay tuned!";
            chatBody.appendChild(aiResponse);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}
