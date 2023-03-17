import TelegramBot from 'node-telegram-bot-api';

const token = 'INSERTA_AQUÍ_TU_TOKEN'; // Reemplaza con el token de tu bot
const bot = new TelegramBot(token, { polling: true });

let maquina = '';
let year = '';
let month = '';
let day = '';

bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const option = callbackQuery.data;

  // Verificar que el usuario no haya seleccionado una máquina previamente
  if (maquina === '') {
    // Guardar la opción seleccionada por el usuario en la variable "maquina"
    maquina = option;

    // Confirmar que la opción ha sido seleccionada correctamente
    await bot.answerCallbackQuery(callbackQuery.id, { text: `Has seleccionado la opción ${option}` });
  }
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Verificar que el usuario haya seleccionado una máquina previamente
  if (maquina === '') {
    // Pedirle al usuario que seleccione una de las opciones
    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'RH1', callback_data: 'RH1' },
            { text: 'RH2', callback_data: 'RH2' },
            { text: 'RH3', callback_data: 'RH3' }
          ],
          [
            { text: 'SML', callback_data: 'SML' },
            { text: 'KMEC1', callback_data: 'KMEC1' },
            { text: 'KMEC2', callback_data: 'KMEC2' }
          ]
        ]
      }
    };

    await bot.sendMessage(chatId, 'Selecciona una opción:', options);
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