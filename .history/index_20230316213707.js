import TelegramBot from 'node-telegram-bot-api';

// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';

// crea un nuevo bot
const bot = new TelegramBot(token, { polling: true });

// escucha los mensajes entrantes
bot.on('message', (msg) => {
    console.log(msg)
  const chatId = msg.chat.id;
  if(msg.text==='Hola') {
    
    //bot.sendMessage(chatId,'No me importa lo que digas, te amo!')
  }
  bot.sendMessage(chatId,'No me importa lo que digas, te amo!')
});

