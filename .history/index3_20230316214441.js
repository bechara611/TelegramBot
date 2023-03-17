import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });

let state= null
let repeat=null

if(repeat===true){
    bot.sendMessage(msg.chat.id, 'Please choose', {
        reply_markup: {
          keyboard: [
            ['Option a', 'Option b'],
          ],
          one_time_keyboard:true
        },
      });
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === 'Option 1') {
    bot.sendMessage(msg.chat.id, 'Please choose', {
        reply_markup: {
          keyboard: [
            ['Option 1.1', 'Option 1.2'],
          ],
          one_time_keyboard:true
        },
      });
    state=true
  } else if (messageText === 'Option 2') {
    state=true
    bot.sendMessage(chatId, 'You selected Option 2. Please choose between Option 2.1 or Option 2.2.',);
  } else if (messageText === 'Option 1.1' && state===true) {
    bot.sendMessage(chatId, 'You selected Option 1.1');
  } else if (messageText === 'Option 1.2' && state===true) {
    bot.sendMessage(chatId, 'You selected Option 1.2');
  } else if (messageText === 'Option 2.1' && state===true) {
    bot.sendMessage(chatId, 'You selected Option 2.1');
  } else if (messageText === 'Option 2.2' && state===true) {
    bot.sendMessage(chatId, 'You selected Option 2.2');
  }
});
