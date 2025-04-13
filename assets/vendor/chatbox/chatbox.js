document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.getElementById("message-input");
  const conversationArea = document.querySelector(".conversation");
  const MAX_HEIGHT = 500;
  const MAX_CONVERSATIONS = 5; // Set the maximum number of conversations to display

  const keywordResponses = {
    "hello": "Hello there! How can I assist you today?",
    "weather": "I'm sorry, I don't have access to real-time weather information.",
    "time": "I'm not capable of providing the current time.",
    "help": "Sure, I'd be happy to help. What do you need assistance with?",
    "bye": "Goodbye! Feel free to return if you have more questions.",
    "price": "Sure, I can help you with pricing. Our website development pricing starts at $1000. You can find more details on our <a href='/pricing'>Pricing</a> page.",
    // Add more keyword-response pairs as needed
  };

  function addMessage() {
    if (messageInput.value.trim() !== "") {
      const userMessage = messageInput.value.trim().toLowerCase();
      const newMessage = document.createElement("div");
      newMessage.classList.add(
        "message",
        "user",
        "animate__animated",
        "animate__fadeInUp"
      );
      newMessage.innerHTML = `<div class="message-content">${userMessage}</div>`;

      conversationArea.appendChild(newMessage);
      messageInput.value = "";

      // Scroll conversation area to the bottom if user is already at the bottom
      if (conversationArea.scrollTop === conversationArea.scrollHeight - conversationArea.clientHeight) {
        conversationArea.scrollTop = conversationArea.scrollHeight;
      }

      // Check for keyword in user's message and respond accordingly
      for (const [keyword, response] of Object.entries(keywordResponses)) {
        if (userMessage.includes(keyword)) {
          setTimeout(() => {
            const aiMessage = document.createElement("div");
            aiMessage.classList.add(
              "message",
              "agent",
              "text-start",
              "animate__animated",
              "animate__fadeInDown"
            );
            aiMessage.innerHTML = `<div class="message-content">${response}</div>`;
            
            conversationArea.appendChild(aiMessage);
            aiMessage.scrollIntoView({ behavior: "smooth" });
          }, 2000);
          return;
        }
      }

      // If no keyword is found, use the default response
      setTimeout(() => {
        const aiMessage = document.createElement("div");
        aiMessage.classList.add(
          "message",
          "agent",
          "text-start",
          "animate__animated",
          "animate__fadeInDown"
        );
        aiMessage.innerHTML = `<div class="message-content">I'm sorry, I didn't understand. Can you please rephrase your message?</div>`;

        conversationArea.appendChild(aiMessage);
        aiMessage.scrollIntoView({ behavior: "smooth" });
      }, 2000);
    }
  }

  document.getElementById("submit").addEventListener("click", addMessage);

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addMessage();
    }
  });
});