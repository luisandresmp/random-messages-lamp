const messages = ["Oscar", "Ana", "Nikolai", "Diego", "Laura"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };