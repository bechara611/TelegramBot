
import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });


let maquina = '';
let year = '';
let month = '';
let day = '';

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Verificar que el usuario haya seleccionado una máquina previamente
  if (maquina === '') {
    // Pedirle al usuario que seleccione una de las opciones
    const options = {
      reply_markup: {
        keyboard: [
          ['RH1', 'RH2', 'RH3'],
          ['SML', 'KMEC1', 'KMEC2']
        ]
      }
    };

    await bot.sendMessage(chatId, 'Selecciona una opción:', options);

    // Guardar la opción seleccionada por el usuario en la variable "maquina"
    maquina = messageText;
  } else {
    // Pedirle al usuario que ingrese una fecha
    await bot.sendMessage(chatId, 'Ingresa una fecha en el formato YYYY-MM-DD:');

    // Escuchar el siguiente mensaje enviado por el usuario para obtener la fecha
    bot.once('message', async (msg) => {
      const date = msg.text.split('-');
      year = date[0];
      month = date[1];
      day = date[2];

      await bot.sendMessage(chatId, `Has ingresado la fecha: ${year}-${month}-${day}`);
    });
  }
});