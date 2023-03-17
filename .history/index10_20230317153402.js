import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });
// Define las opciones del menú
const MENUMAQ = [
    [
        {
            text: 'RH1',
            callback_data: 'RH1',
        },
    ],
    [
        {
            text: 'RH2',
            callback_data: 'RH2',
        },
    ],
    [
        {
            text: 'CANCEL',
            callback_data: 'stop',
        },
    ],
];

const MENUMAQ2= [
    [
        {
            text: 'A',
            callback_data: 'A',
        },
    ],
    [
        {
            text: 'B',
            callback_data: 'B',
        },
    ],
    [
        {
            text: 'CANCEL',
            callback_data: 'stop',
        },
    ],
];
const menuMarkup = {
    reply_markup: {
        inline_keyboard: MENUMAQ,
    },
};

const menuMarkup2 = {
    reply_markup: {
        inline_keyboard: MENUMAQ2,
    },
};
// Maneja el evento cuando el usuario hace clic en un botón del menú
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;
    if (data === 'RH1') {
        // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
        bot.sendMessage(chatId, 'Seleccionaste RH1');

    } 
    if (data === 'RH2') {
        // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
        bot.sendMessage(chatId, 'Seleccionaste RH2');
    } 
    if (data === 'A') {
        // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
        bot.sendMessage(chatId, 'Seleccionaste A');
    } 
    else if (data === 'stop') {
        bot.sendMessage(chatId, 'deteniendo acción...');
        // Si el usuario hace clic en "Parar menú", elimina el menú y detén la escucha de eventos
        bot.deleteMessage(chatId, query.message.message_id);
        // bot.removeListener('callback_query', this);

        //todo
        bot.sendMessage(msg.chat.id, 'Bienvenido al menú 2', menuMarkup2);
    }
});
// Enviar el mensaje de bienvenida con el menú
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bienvenido al menú', menuMarkup);
});