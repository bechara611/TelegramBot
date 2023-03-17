import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });


// Objeto de estado para almacenar la ubicación del usuario
const estado = {};

bot.on('message', (msg) => {
  // Obtener la ubicación actual del usuario
  const ubicacion = estado[msg.chat.id];

  // Si el usuario está en el menú principal
  if (!ubicacion) {
    bot.sendMessage(msg.chat.id, '¿Qué operación deseas realizar?', {
      reply_markup: {
        keyboard: [
          ['Sumar', 'Restar'],
          ['Cancelar']
        ]
      }
    });

    // Actualizar la ubicación del usuario al menú principal
    estado[msg.chat.id] = 'menu_principal';
  }
  // Si el usuario seleccionó Sumar
  else if (ubicacion === 'sumar') {
    // Aquí ignoramos cualquier entrada que no sea un número
    if (isNaN(msg.text)) {
      bot.sendMessage(msg.chat.id, 'Por favor ingresa un número válido.');
      return;
    }

    const num1 = estado[msg.chat.id].num1;

    if (!num1) {
      estado[msg.chat.id].num1 = parseInt(msg.text);
      bot.sendMessage(msg.chat.id, 'Por favor ingresa el segundo número:');
    } else {
      const num2 = parseInt(msg.text);
      const suma = num1 + num2;
      bot.sendMessage(msg.chat.id, `La suma de ${num1} y ${num2} es ${suma}`);
      // Restablecer la ubicación del usuario al menú principal
      estado[msg.chat.id] = null;
    }
  }
  // Si el usuario seleccionó Restar
  else if (ubicacion === 'restar') {
    // Aquí ignoramos cualquier entrada que no sea un número
    if (isNaN(msg.text)) {
      bot.sendMessage(msg.chat.id, 'Por favor ingresa un número válido.');
      return;
    }

    const num1 = estado[msg.chat.id].num1;

    if (!num1) {
      estado[msg.chat.id].num1 = parseInt(msg.text);
      bot.sendMessage(msg.chat.id, 'Por favor ingresa el segundo número:');
    } else {
      const num2 = parseInt(msg.text);
      const resta = num1 - num2;
      bot.sendMessage(msg.chat.id, `La resta de ${num1} y ${num2} es ${resta}`);
      // Restablecer la ubicación del usuario al menú principal
      estado[msg.chat.id] = null;
    }
  }
});

bot.on('text', (msg) => {
  const ubicacion = estado[msg.chat.id];

  // Si el usuario está en el menú principal
  if (ubicacion === 'menu_principal') {
    const opcion = msg.text;

    if (opcion === 'Sumar' || opcion === 'Restar') {
      bot.sendMessage(msg.chat.id, 'Por favor ingresa el primer número:');
      // Actualizar la ubicación del usuario a Sumar o Restar
      estado[msg.chat.id] = { opcion: opcion };
    } else if (opcion === 'Cancelar
