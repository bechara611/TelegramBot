import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });



bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hola, ¿qué quieres hacer?', {
      reply_markup: {
        keyboard: [
          ['Opción 1', 'Opción 2'],
          ['Opción 3', 'Opción 4'],
          ['Cancelar']
        ],
        one_time_keyboard:true
      },
    });
  });
  
bot.on('message',(msg)=>{
  if(msg.text==='Opción 1'){
    bot.sendMessage(msg.chat.id,'Ok!!!')
    bot.sendMessage(msg.chat.id, 'Hola, ¿qué quieres hacer?', {
      reply_markup: {
        keyboard: [
          ['Opción A', 'Opción B'],
          ['Opción D', 'Opción C'],
          ['Cancelar']
        ],
        one_time_keyboard:true
      },
    });
  }
})


