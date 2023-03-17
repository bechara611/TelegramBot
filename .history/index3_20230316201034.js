import TelegramBot from 'node-telegram-bot-api';

// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';


// Crea una nueva instancia del bot
const bot = new TelegramBot(token, { polling: true });

// Manejador para el comando '/start'
bot.onText(/\/start/, (msg) => {
  // ID del chat
  const chatId = msg.chat.id;
  
  // Menú principal
  const menuPrincipal = {
    reply_markup: {
      keyboard: [
        ['Opción 1', 'Opción 2'],
        ['Opción 3', 'Opción 4'],
      ]
    }
  };
  
  // Envía el mensaje con el menú principal
  bot.sendMessage(chatId, 'Bienvenido al menú principal', menuPrincipal);
});

// Manejador para las opciones del menú principal
bot.on('message', (msg) => {
  // ID del chat
  const chatId = msg.chat.id;
  
  switch (msg.text) {
    case 'Opción 1':
      // Menú interno para la opción 1
      const menuOpcion1 = {
        reply_markup: {
          keyboard: [
            ['Subopción 1', 'Subopción 2'],
            ['Volver al menú principal'],
          ]
        }
      };
      
      // Envía el mensaje con el menú interno
      bot.sendMessage(chatId, 'Has seleccionado la opción 1', menuOpcion1);
      break;
    
    case 'Opción 2':
      // Menú interno para la opción 2
      const menuOpcion2 = {
        reply_markup: {
          keyboard: [
            ['Subopción 1', 'Subopción 2'],
            ['Volver al menú principal'],
          ]
        }
      };
      
      // Envía el mensaje con el menú interno
      bot.sendMessage(chatId, 'Has seleccionado la opción 2', menuOpcion2);
      break;
      
    case 'Opción 3':
      // Acción para la opción 3
      bot.sendMessage(chatId, 'Has seleccionado la opción 3');
      break;
      
    case 'Opción 4':
      // Acción para la opción 4
      bot.sendMessage(chatId, 'Has seleccionado la opción 4');
      break;
      
    case 'Subopción 1':
      // Acción para la subopción 1
      bot.sendMessage(chatId, 'Has seleccionado la subopción 1');
      break;
      
    case 'Subopción 2':
      // Acción para la subopción 2
      bot.sendMessage(chatId, 'Has seleccionado la subopción 2');
      break;
      
    case 'Volver al menú principal':
      // Menú principal
      const menuPrincipal = {
        reply_markup: {
          keyboard: [
            ['Opción 1', 'Opción 2'],
            ['Opción 3', 'Opción 4'],
          ]
        }
      };
      
      // Envía el mensaje