import TelegramBot from 'node-telegram-bot-api';
import { leerArchivoExcel } from './excel.js';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });
// let resultado = await leerArchivoExcel('./VFL QUERY SQL 2.xlsm');
// console.log('inicio nuevo')
try {
    let resultado;
    let maquina = '';
    let fecha = '';
    let year = ''
    let mes = ''
    let pulso = false
    let dia = ''
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
                text: 'RH3',
                callback_data: 'RH3',
            },
        ],
        [
            {
                text: 'SML',
                callback_data: 'SML ',
            },
        ],
        [
            {
                text: 'KMEC 1',
                callback_data: 'KMEC ',
            },
        ],
        [
            {
                text: 'KMEC 2',
                callback_data: 'KMEC2',
            },
        ],
        [
            {
                text: 'MAKLAUS',
                callback_data: 'REPESAR',
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
    
    bot.onText(/\/start/,async (msg) => {
        bot.sendMessage(msg.chat.id, `Iniciando, por favor espere...`);
        resultado=null;
        resultado = await leerArchivoExcel('./VFL QUERY SQL 2.xlsm');
        bot.sendMessage(msg.chat.id, 'Bienvenido al menú', menuMarkup);
    });
    
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;
        if (data === 'RH1') {
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            maquina = data
            pulso = true
           // bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
        }
        if (data === 'RH2') {
            maquina = data
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
          //  bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
    
        }
        if (data === 'RH3') {
            maquina = data
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
    
        }
        if (data === 'SML ') {
            maquina = data
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
    
        }
        if (data === 'KMEC ') {
            maquina = data
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
    
        }
        
        if (data === 'KMEC2') {
            maquina = data
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
    
        }
        if (data === 'REPESAR') {
            maquina = data
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);
    
    
        }
        if (data === 'stop') {
    
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            bot.deleteMessage(chatId, query.message.message_id )
            bot.sendMessage(chatId, `Hasta luego, para volver a activar una consulta, escriba /start`);
    
    
        }
        bot.deleteMessage(chatId, query.message.message_id )
    })
    bot.on('message', (msg) => {
        //? comprobar que si sea fecha lo que coloques
        fecha = msg.text.split('-');
        dia = fecha[0]
        mes = fecha[1]
        year = fecha[2]
        if (isNaN(dia) === true || isNaN(mes) === true || isNaN(year) === true || dia>31 || mes>12 || year<2018) {
    
            dia = null
            mes = null
            year = null;
            if (pulso === true && maquina && msg.text!=='/start' && msg.text.toUpperCase()!=='/START') {
                bot.sendMessage(msg.chat.id, `Tu fecha seleccionada es incorrecta, 
                por favor, vuelva a escribir la fecha en formato de dd-mm-yyyy`)
                return
    
            }
        }
        if (maquina && fecha.length === 3 && dia && mes && year && dia<=31 && mes<=12) {
    
           // bot.sendMessage(msg.chat.id, `Tu fecha seleccionada es ${msg.text} para la maquina ${maquina} por favor espere...`)
            bot.sendMessage(msg.chat.id, 'Elija una opción:', {
                reply_markup: {
                  inline_keyboard: [
                    [
                      {
                        text: 'Calidad 1',
                        callback_data: '1'
                      },
                      {
                        text: 'Desperdicio',
                        callback_data: '3'
                      }
                    ]
                  ]
                }
              });
          
            //todo final de todo
            pulso = false
        }
    })
    
    //callbacks luego de las fechas para seleccion un submenu, ese callbackquery esta siendo llamado en la seccion donde ya comprobamos que si puso fechas correctas
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;
    
        if (data === '1') {
          
            let respuestaFiltrada =resultado;
            let e1=0
            let T1=0;
            let T2=0;
            let T3=0;
            let TD= 0;
            let TN=0;
            let productos=[];
            let operadores=[];
            respuestaFiltrada=respuestaFiltrada.filter((elemento)=>elemento['id_maqempaque2']==maquina && elemento['DIAMES']==dia  && elemento['MES']==mes && elemento['Año']==year && elemento['calidad']==1 )
        //    console.log(respuestaFiltrada)
        //    console.log(maquina)
            respuestaFiltrada.forEach(element => {
                if(!productos.includes(element['VFL_COD'])){
                    productos.push(element['VFL_COD'])
                }
                if(!operadores.includes(element['operador'].toLowerCase())){
                    operadores.push(element['operador'].toLowerCase())
                }
            if(element['Turnos']=='T1'){
                T1=T1+element['peso_bovina'];
            }
            if(element['Turnos']=='T2'){
                T2=T2+element['peso_bovina'];
            }
            if(element['Turnos']=='T3'){
                T3=T3+element['peso_bovina'];
            }
            if(element['Turnos']=='TD'){
                TD=TD+element['peso_bovina'];
            }
            if(element['Turnos']=='TN'){
                TN=TN+element['peso_bovina'];
            }
            //?TOTAL
            e1=e1+element['peso_bovina'];
            });
            //let respuestaString = JSON.stringify(resultado)
            bot.sendMessage(chatId,
            `-----------${maquina}-----------${dia}/${mes}/${year}-------
            T1: ${Math.round(T1)} KG
            T2: ${Math.round(T2)} KG
            T3: ${Math.round(T3)} KG
            TD: ${Math.round(TD)} KG
            TN: ${Math.round(TN)} KG
            TOTAL E1: ${Math.round(e1)} KG
            ------------------------------
            Productos involucrados: ${productos}
            ------------------------------
            Operadores involucrados: ${operadores}
            `);
    
           // console.log({maquina,mes,dia,year})
           
        }
        if (data === '3') {
            let productos=[];
            let operadores=[];
            let respuestaFiltrada =resultado;
            let e3=0
            let T1=0;
            let T2=0;
            let T3=0;
            let TD= 0;
            let TN=0;
            respuestaFiltrada=respuestaFiltrada.filter((elemento)=>elemento['id_maqempaque2']==maquina && elemento['DIAMES']==dia  && elemento['MES']==mes && elemento['Año']==year  && elemento['calidad']!=1  )
            respuestaFiltrada.forEach(element => {
                if(!productos.includes(element['VFL_COD'])){
                    productos.push(element['VFL_COD'])
                }
                if(!operadores.includes(element['operador'].toLowerCase())){
                    operadores.push(element['operador'].toLowerCase())
                }
                if(element['Turnos']=='T1'){
                    T1=T1+element['peso_bovina'];
                }
                if(element['Turnos']=='T2'){
                    T2=T2+element['peso_bovina'];
                }
                if(element['Turnos']=='T3'){
                    T3=T3+element['peso_bovina'];
                }
                if(element['Turnos']=='TD'){
                    TD=TD+element['peso_bovina'];
                }
                if(element['Turnos']=='TN'){
                    TN=TN+element['peso_bovina'];
                }
            //?TOTAL
            e3=e3+element['peso_bovina'];
            });
            //let respuestaString = JSON.stringify(resultado)
            bot.sendMessage(chatId,
                `-----------${maquina}-----------${dia}/${mes}/${year}-------
                T1: ${Math.round(T1)} KG
                T2: ${Math.round(T2)} KG
                T3: ${Math.round(T3)} KG
                TD: ${Math.round(TD)} KG
                TN: ${Math.round(TN)} KG
                TOTAL DESP: ${Math.round(e3)} KG
                --------------------------------
                Productos involucrados: ${productos}
                ------------------------------
                Operadores involucrados: ${operadores}
    
                PD: Este desperdicio es netamente del proceso de extrusion, sin ajustes por consumo.
                `);
           // console.log({maquina,mes,dia,year})
          
        }
    })
        
} catch (error) {
   // console.log(error)
}
