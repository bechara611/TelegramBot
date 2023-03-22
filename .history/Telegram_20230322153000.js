import TelegramBot from 'node-telegram-bot-api';
import { leerArchivoExcel } from './excel.js';
import { obtenerSemana } from './Helpers.js';
// reemplaza con tu token de acceso
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
const tokenPrueba = '5776165902:AAGWs7OUTqR1iZDpT1HepqvFhlE7R7E7qg8'
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(tokenPrueba, { polling: true });
// let resultado = await leerArchivoExcel('./VFL QUERY SQL 2.xlsm');

try {
    // let maquinas=['RH1','RH2','RH3','SML','KMEC','KMEC2','REPESAR']
    const maquinas = [
        'RH1',
        'RH2',
        'RH3',
        'SML ',
        'KMEC ',
        'KMEC2',
        'REPESAR',

    ];
    let resultado = [];
    let maquina = '';
    let semana = '';
    let fecha = '';
    let year = ''
    let mes = ''
    let pulso = false
    let dia = ''
    let numeroSemana=null;
    const MENUMAQ = [
        [
            {
                text: 'RESUMEN GENERAL E1 POR DIA',
                callback_data: 'TODAS',
            },
        ],
        [
            {
                text: 'RESUMEN GENERAL E1 POR SEMANA',
                callback_data: 'SEMANA',
            },
        ],
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

    bot.onText(/\/start/, async (msg) => {
        bot.sendMessage(msg.chat.id, `Iniciando, por favor espere...`);
        resultado = [];
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
        if (data === 'TODAS') {
            maquina = 'TODAS'
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);


        }
        if (data === 'SEMANA') {
            maquina = 'TODAS'
            semana = 'SEMANA'
            pulso = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba por favor el numero de la semana`);


        }
        if (data === 'stop') {

            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            bot.deleteMessage(chatId, query.message.message_id)
            bot.sendMessage(chatId, `Hasta luego, para volver a activar una consulta, escriba /start`);


        }
        // bot.deleteMessage(chatId, query.message.message_id )
    })
    bot.on('message', (msg) => {
        //? comprobar que si sea fecha lo que coloques

        if (semana != 'SEMANA' &&  msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
            fecha = msg.text.split('-');
            dia = fecha[0]
            mes = fecha[1]
            year = fecha[2]
            if (isNaN(dia) === true || isNaN(mes) === true || isNaN(year) === true || dia > 31 || mes > 12 || year < 2018) {

                dia = null
                mes = null
                year = null;
                if (pulso === true && maquina && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
                    bot.sendMessage(msg.chat.id, `Tu fecha seleccionada es incorrecta, 
                    por favor, vuelva a escribir la fecha en formato de dd-mm-yyyy`)
                    return

                }
            }
            if (maquina && fecha.length === 3 && dia && mes && year && dia <= 31 && mes <= 12) {

                // bot.sendMessage(msg.chat.id, `Tu fecha seleccionada es ${msg.text} para la maquina ${maquina} por favor espere...`)
                bot.sendMessage(msg.chat.id, '----', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Pulsa aca para generar el reporte',
                                    callback_data: '1'
                                }
                            ]
                        ]
                    }
                });

                //todo final de todo
                pulso = false
            }
        }
        if(semana=='SEMANA'  &&  msg.text !== '/start' && msg.text.toUpperCase() !== '/START'){
            numeroSemana=msg.text
            if( isNaN(numeroSemana)===true){
                numeroSemana=null
                if (pulso === true && maquina && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
                    bot.sendMessage(msg.chat.id, `Tu semana seleccionada es incorrecta, vuelva a intentarlo`)
                    return
    
                }    
            }else{
                bot.sendMessage(msg.chat.id, '----', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `Pulsa aca para generar el reporte de la semana ${numeroSemana} `,
                                    callback_data: '3'
                                }
                            ]
                        ]
                    }
                });
              //  console.log(numeroSemana)
                semana=''
            }
            
        }

    })

    //callbacks luego de las fechas para seleccion un submenu, ese callbackquery esta siendo llamado en la seccion donde ya comprobamos que si puso fechas correctas
    bot.on('callback_query', async (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;

        if (data === '1' && maquina !== 'TODAS') {

            let respuestaFiltrada = resultado;
            //console.log(respuestaFiltrada[0]['FECHATEXTO'])
            //let fecha = new Date(respuestaFiltrada[0]['FECHATEXTO'])
            // let semana= await obtenerSemana(fecha)
            // console.log(semana)
            let e1 = 0
            let T1 = 0;
            let T2 = 0;
            let T3 = 0;
            let TD = 0;
            let TN = 0;
            let productos = [];
            let operadores = [];
            respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['id_maqempaque2'] == maquina && elemento['DIAMES'] == dia && elemento['MES'] == mes && elemento['Año'] == year && elemento['calidad'] == 1)
            //    console.log(respuestaFiltrada)
            //    console.log(maquina)
            respuestaFiltrada.forEach(element => {
                if (!productos.includes(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')) {
                    productos.push(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')
                }
                if (!operadores.includes(element['operador'].toLowerCase())) {
                    operadores.push(element['operador'].toLowerCase())
                }
                if (element['Turnos'] == 'T1') {
                    T1 = T1 + element['peso_bovina'];
                }
                if (element['Turnos'] == 'T2') {
                    T2 = T2 + element['peso_bovina'];
                }
                if (element['Turnos'] == 'T3') {
                    T3 = T3 + element['peso_bovina'];
                }
                if (element['Turnos'] == 'TD') {
                    TD = TD + element['peso_bovina'];
                }
                if (element['Turnos'] == 'TN') {
                    TN = TN + element['peso_bovina'];
                }
                //?TOTAL
                e1 = e1 + element['peso_bovina'];
            });
            if (e1 <= 0) {
                bot.sendMessage(chatId, `No hay produccion de calidad 1 para  ${maquina} en el dia ${dia}/${mes}/${year}`)
            } else {
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

            }


            // console.log({maquina,mes,dia,year})
            //? Nuevo
            productos = [];
            operadores = [];
            respuestaFiltrada = resultado;
            let e3 = 0
            T1 = 0;
            T2 = 0;
            T3 = 0;
            TD = 0;
            TN = 0;
            respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['id_maqempaque2'] == maquina && elemento['DIAMES'] == dia && elemento['MES'] == mes && elemento['Año'] == year && elemento['calidad'] != 1)
            respuestaFiltrada.forEach(element => {
                if (!productos.includes(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')) {
                    productos.push(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')
                }
                if (!operadores.includes(element['operador'].toLowerCase())) {
                    operadores.push(element['operador'].toLowerCase())
                }
                if (element['Turnos'] == 'T1') {
                    T1 = T1 + element['peso_bovina'];
                }
                if (element['Turnos'] == 'T2') {
                    T2 = T2 + element['peso_bovina'];
                }
                if (element['Turnos'] == 'T3') {
                    T3 = T3 + element['peso_bovina'];
                }
                if (element['Turnos'] == 'TD') {
                    TD = TD + element['peso_bovina'];
                }
                if (element['Turnos'] == 'TN') {
                    TN = TN + element['peso_bovina'];
                }
                //?TOTAL
                e3 = e3 + element['peso_bovina'];
            });
            if (e3 <= 0) {
                bot.sendMessage(chatId, `No hay desperdicio para ${maquina} en el dia ${dia}/${mes}/${year}`)
            } else {
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
            }
            // console.log({maquina,mes,dia,year})
        }

        if (data === '1' && maquina === 'TODAS') {

            // let respuestaFiltrada = resultado;


            maquinas.forEach(async maquinita => {
                let respuestaFiltrada = resultado;
                let e1 = 0
                let T1 = 0;
                let T2 = 0;
                let T3 = 0;
                let TD = 0;
                let TN = 0;
                let productos = [];
                let operadores = [];
                respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['id_maqempaque2'] == maquinita && elemento['DIAMES'] == dia && elemento['MES'] == mes && elemento['Año'] == year && elemento['calidad'] == 1)
                //    console.log(respuestaFiltrada)
                //    console.log(maquina)
                respuestaFiltrada.forEach(async element => {
                    if (!productos.includes(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')) {
                        productos.push(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')
                    }
                    if (!operadores.includes(element['operador'].toLowerCase())) {
                        operadores.push(element['operador'].toLowerCase())
                    }
                    if (element['Turnos'] == 'T1') {
                        T1 = T1 + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'T2') {
                        T2 = T2 + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'T3') {
                        T3 = T3 + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'TD') {
                        TD = TD + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'TN') {
                        TN = TN + element['peso_bovina'];
                    }
                    //?TOTAL
                    e1 = e1 + element['peso_bovina'];
                });
                //let respuestaString = JSON.stringify(resultado)
                setTimeout(() => {

                }, 1000);
                if (e1 <= 0) {
                    await bot.sendMessage(chatId, `${maquinita}: 0 KG`)
                } else {
                    await bot.sendMessage(chatId,
                        `-----------${maquinita}-----------${dia}/${mes}/${year}-------
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
                }


                // console.log({maquina,mes,dia,year})
            });



        }
        //?esta seccion del menu 3 es para mostrar todo por semana se le asigno el numero 3
        if(data==='3'){

            maquinas.forEach(async maquinita => {
                let respuestaFiltrada = resultado;
                let e1 = 0
                let T1 = 0;
                let T2 = 0;
                let T3 = 0;
                let TD = 0;
                let TN = 0;
                let productos = [];
                let operadores = [];
                respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['id_maqempaque2'] == maquinita   &&  elemento['calidad'] == 1)
                //    console.log(respuestaFiltrada)
                //    console.log(maquina)
 
                respuestaFiltrada.forEach(async element => {
                    let semanaNueva = await obtenerSemana(new Date(element['FECHATEXTO']);
               
                    if(semanaNueva.toString()==numeroSemana){
                    if (!productos.includes(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')) {
                        productos.push(element['NOMBRE_PROD'] + ' ' + element['ESPESOR'] + 'x' + element['ancho'] + 'mm')
                    }
                    if (!operadores.includes(element['operador'].toLowerCase())) {
                        operadores.push(element['operador'].toLowerCase())
                    }
                    if (element['Turnos'] == 'T1') {
                        T1 = T1 + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'T2') {
                        T2 = T2 + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'T3') {
                        T3 = T3 + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'TD') {
                        TD = TD + element['peso_bovina'];
                    }
                    if (element['Turnos'] == 'TN') {
                        TN = TN + element['peso_bovina'];
                    }
                    //?TOTAL
                    e1 = e1 + element['peso_bovina'];
                }});
                
                //let respuestaString = JSON.stringify(resultado)
                setTimeout(() => {

                }, 1000);
                if (e1 <= 0) {
                    await bot.sendMessage(chatId, `${maquinita}: 0 KG`)
                } else {
                    await bot.sendMessage(chatId,
                        `-----------${maquinita}-----------SEMANA ${numeroSemana}-------
                        T1: ${Math.round(T1)} KG
                        T2: ${Math.round(T2)} KG
                        T3: ${Math.round(T3)} KG
                        TD: ${Math.round(TD)} KG
                        TN: ${Math.round(TN)} KG
                        TOTAL E1: ${Math.round(e1)} KG
                        ------------------------------
                        Productos involucrados: ${productos}
                        `);
                }


                // console.log({maquina,mes,dia,year})
            });


        }

    })

} catch (error) {
    // console.log(error)
}
