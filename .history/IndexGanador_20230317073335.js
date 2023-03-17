import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });


let maquina = null;
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hola, Por favor selecciona una de nuestras lineas', {
    reply_markup: {
      keyboard: [
        ['RH1', 'RH2'],
        ['RH3', 'SML'],
        ['KMEC 1'], ['KMEC 2'], ['EREMA 1'], ['EREMA 2'], ['CANCELAR'],
      ],
      one_time_keyboard: true
    },
  });
});

bot.on('message', (msg) => {
  if (msg.text === 'RH1' || msg.text === 'RH2' || msg.text === 'RH3' || msg.text === 'SML' || msg.text === 'KMEC 1' || msg.text === 'KMEC 2' || msg.text === 'EREMA 1' || msg.text === 'EREMA 2') {
    maquina = msg.text
    bot.sendMessage(msg.chat.id, 'Lograste seleccionar la maquina!!!')
    bot.sendMessage(msg.chat.id, 'Por favor, escribe seguido de un espacio el año, mes y dia. Ejemplo: "2023 16 3"',);
  }
})


