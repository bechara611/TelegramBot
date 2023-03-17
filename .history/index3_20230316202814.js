import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });

// Manejador de comandos '/start'
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hola, ¿qué quieres hacer?', {
    reply_markup: {
      keyboard: [
        ['Opción 1', 'Opción 2'],
        ['Opción 3', 'Opción 4'],
        ['Cancelar']
      ]
    }
  });
});

bot.onText(/\/comprar/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hola, ¿qué quieres hacer?', {
      reply_markup: {
        keyboard: [
          ['Opción 1', 'Opción 2'],
          ['Opción 3', 'Opción 4'],
          ['Cancelar']
        ]
      }
    });
  });

// Manejador de respuestas al menú principal
bot.on('message', (msg) => {
  const opcion = msg.text;

  if (opcion === 'Cancelar') {
    bot.sendMessage(msg.chat.id, 'Acción cancelada');
  } else {
    bot.sendMessage(msg.chat.id, `Seleccionaste ${opcion}. ¿Estás seguro?`, {
      reply_markup: {
        keyboard: [
          ['Sí', 'No']
        ]
      }
    });
  }
});

// Manejador de respuestas al menú secundario
bot.on('message', (msg) => {
  const respuesta = msg.text;

  if (respuesta === 'Sí') {
    bot.sendMessage(msg.chat.id, 'Acción realizada con éxito');
  } else if (respuesta === 'No') {
    bot.sendMessage(msg.chat.id, 'Acción cancelada');
  }
});
