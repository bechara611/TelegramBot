import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });




bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === 'Option 1') {
    bot.sendMessage(chatId, 'You selected Option 1. Please choose between Option 1.1 or Option 1.2.');
  } else if (messageText === 'Option 2') {
    bot.sendMessage(chatId, 'You selected Option 2. Please choose between Option 2.1 or Option 2.2.');
  } else if (messageText === 'Option 1.1') {
    bot.sendMessage(chatId, 'You selected Option 1.1');
  } else if (messageText === 'Option 1.2') {
    bot.sendMessage(chatId, 'You selected Option 1.2');
  } else if (messageText === 'Option 2.1') {
    bot.sendMessage(chatId, 'You selected Option 2.1');
  } else if (messageText === 'Option 2.2') {
    bot.sendMessage(chatId, 'You selected Option 2.2');
  }
});
