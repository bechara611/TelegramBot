import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });




// Manejador de respuestas al menú principal
bot.on('message', (msg) => {
  const opcion = msg.text;

  if (opcion === 'Cancelar') {
    bot.sendMessage(msg.chat.id, 'Acción cancelada');
 
  }
});

// Manejador de respuestas al menú secundario
bot.on('message', (msg) => {
  const respuesta = msg.text;

  if (respuesta === 'Sí') {
    bot.sendMessage(msg.chat.id, 'Acción realizada con éxito');
  } else if (respuesta === 'No') {
    bot.sendMessage(msg.chat.id, 'Acción cancelada');
  } else{
    return
  }
});
