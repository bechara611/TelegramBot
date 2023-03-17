import TelegramBot from 'node-telegram-bot-api';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });

let maquina= '';
let fecha='';
let year=''
let mes=''
let dia=''
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

const menuMarkup = {
    reply_markup: {
        inline_keyboard: MENUMAQ,
    },
};

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bienvenido al menú', menuMarkup);
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;
    if (data === 'RH1') {
        // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
        maquina=data
        bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
        bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);

    } 
    if (data === 'RH2') {
        maquina=data
        // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
        bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
        bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);

      
    } })
    bot.on('message',(msg)=>{
//? comprobar que si sea fecha lo que coloques
        fecha= msg.text.split('-');
        dia=fecha[0]
        mes=fecha[1]
        year=fecha[2]
        if(isNaN(dia)===false || isNaN(mes)===false || isNaN(year)===false){
            dia=null
            mes=null
            year=null
            return
        }
        if(maquina && fecha.length===3 && dia && mes && year){
            
            bot.sendMessage(msg.chat.id,`Tu fecha seleccionada es ${msg.text}`)
        }
    })
   