import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });

// Define las opciones del menú
const menuButtons = [
    [
        {
            text: 'Ejecutar acción',
            callback_data: 'action',
        },
    ],
    [
        {
            text: 'Parar menú',
            callback_data: 'stop',
        },
    ],
];

const menuMarkup2 = {
    reply_markup: {
        inline_keyboard: menuButtons,
    },
};

const menuButtons2 = [
    [
        {
            text: 'Ejecutar acción2',
            callback_data: 'action2',
        },
    ],
    [
        {
            text: 'Parar menú2',
            callback_data: 'stop2',
        },
    ],
];

const menuMarkup = {
    reply_markup: {
        inline_keyboard: menuButtons,
    },
};

// Maneja el evento cuando el usuario hace clic en un botón del menú
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'action') {
        // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
        bot.sendMessage(chatId, 'Ejecutando acción...');
        bot.sendMessage(chatId, 'Menu 2', menuMarkup2);
        bot.on('callback_query',(query)=>{
            if(query.data==='action2'){
                bot.sendMessage(chatId, 'Ejecutando acción2...');
            }
        })
    } else if (data === 'stop') {
        bot.sendMessage(chatId, 'deteniendo acción...');
        // Si el usuario hace clic en "Parar menú", elimina el menú y detén la escucha de eventos
        bot.deleteMessage(chatId, query.message.message_id);
        // bot.removeListener('callback_query', this);
    }
});

// Enviar el mensaje de bienvenida con el menú
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bienvenido al menú', menuMarkup);
});
