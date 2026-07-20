document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    function appendMessage(text, className) {
        const message = document.createElement("div");
        message.className = className;
        message.textContent = text;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessage() {
        const text = userInput.value.trim();

        if (!text) {
            return;
        }

        appendMessage(text, "user-message");
        userInput.value = "";
        userInput.focus();

        window.setTimeout(() => {
            appendMessage(" Modi!! Modi!! ", "bot-message");
        }, 300);
    }

    sendBtn.addEventListener("click", sendMessage);

    userInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
const inputField = document.getElementById("userInput");
const btn = document.getElementById("sendBtn");
const chatContainer = document.getElementById("chatContainer");

btn.addEventListener("click", function () {
    const text = input.value;
    if (text === "") {
        return;
    }
    const bubble = document.createElement("div");
    bubble.className="Message user"
    bubble.textContent = text;

    messageBox.appendChild(bubble);

    input.value = "";
})