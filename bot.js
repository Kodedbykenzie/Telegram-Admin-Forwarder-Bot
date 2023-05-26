const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6291913449:AAGGpS5SlX5_vV9bUJJrG7VZAQKX_XTeTUQ', { polling: true });


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Check if the message is sent by the admin
  if (msg.from.id === 1267334388) {
    // Forward the message to the specified group
    bot.forwardMessage(-794765412, chatId, msg.message_id);
  }
});


