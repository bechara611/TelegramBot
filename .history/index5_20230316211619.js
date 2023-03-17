import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });
const TelegramBot = require('node-telegram-bot-api');



// Manejador de comandos '/start'
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hola, ¿qué quieres hacer?', {
    reply_markup: {
      keyboard: [
        ['Opción 1', 'Opción 2'],
        ['Cancelar']
      ]
    }
  });
});

// Manejador de respuestas al menú principal
bot.on('message', (msg) => {
  const opcion = msg.text;

  if (opcion === 'Opción 1') {
    bot.sendMessage(msg.chat.id, 'Seleccionaste Opción 1. ¿Qué acción quieres realizar?', {
      reply_markup: {
        keyboard: [
          ['Acción 1', 'Acción 2'],
          ['Cancelar']
        ]
      }
    });
  } else if (opcion === 'Opción 2') {
    bot.sendMessage(msg.chat.id, 'Seleccionaste Opción 2. ¿Qué acción quieres realizar?', {
      reply_markup: {
        keyboard: [
          ['Acción 3', 'Acción 4'],
          ['Cancelar']
        ]
      }
    });
  } else if (opcion === 'Cancelar') {
    bot.sendMessage(msg.chat.id, 'Acción cancelada');
  } else {
    bot.sendMessage(msg.chat.id, 'Opción no válida. Por favor, seleccione una opción del menú.');
  }
});

// Manejador de respuestas al menú secundario
bot.on('message', (msg) => {
  const respuesta = msg.text;

  if (respuesta === 'Acción 1') {
    bot.sendMessage(msg.chat.id, 'Realizando Acción 1...');
  } else if (respuesta === 'Acción 2') {
    bot.sendMessage(msg.chat.id, 'Realizando Acción 2...');
  } else if (respuesta === 'Acción 3') {
    bot.sendMessage(msg.chat.id, 'Realizando Acción 3...');
  } else if (respuesta === 'Acción 4') {
    bot.sendMessage(msg.chat.id, 'Realizando Acción 4...');
  } else if (respuesta === 'Cancelar') {
    bot.sendMessage(msg.chat.id, 'Acción cancelada');
  } else {
    bot.sendMessage(msg.chat.id, 'Opción no válida. Por favor, seleccione una opción del menú.');
  }
});
