import TelegramBot from 'node-telegram-bot-api';
import { leerArchivoExcel } from './excel.js';
import { leerArchivoExcel2, leerArchivoExcel3 } from './excel2.js';
import { obtenerSemana } from './Helpers.js';
import fs from 'fs';
// reemplaza con tu token de acceso
const rutaInv = "./VFL INV.xlsx"
const rutaInvRed = "L:/VFL BALANCE MP/RUTAS DE GP/VFL INV.xlsx"
const rutaEremas = "./EREMAS/BD EREMAS.xlsx"
const rutaEremasRed = "L:/VFL BALANCE MP/BD EREMAS.xlsx"
const token = '6270492397:AAERsqAbZwbLD73p1efZ8aw38eFky4YwRy0';
const tokenPrueba2 = '5776165902:AAGWs7OUTqR1iZDpT1HepqvFhlE7R7E7qg8'
//maquinas para la parte de erema
let maquinas2 = ['SML EREMA', 'RECICLADORA 1', 'RECICLADORA 2']
// Crear un nuevo bot con el token proporcionado por BotFather
const bot = new TelegramBot(token, { polling: true });
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
    let mesMenu = '';
    let fecha = '';
    let year = ''
    let mes = ''
    let pulso = false
    let pulsoSemana = false;
    let pulsoMes=false
    let dia = ''
    let numeroSemana = null;
    let numeroMes=null;
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
                text: 'RESUMEN GENERAL E1 POR DIA- EXT Y COR',
                callback_data: 'TODAS',
            },
        ],
        [
            {
                text: 'RESUMEN GENERAL E1 POR SEMANA- EXT Y COR',
                callback_data: 'SEMANA',
            },
        ],
        [
            {
                text: 'RESUMEN GENERAL E1 POR MES- EXTRUSIÓN',
                callback_data: 'MES',
            },
        ],
        [
            {
                text: 'RESUMEN GENERAL RECICLAJE POR DIA',
                callback_data: 'EREMAS',
            },
        ],
        [
            {
                text: 'INVENTARIOS',
                callback_data: 'INVENTARIOS',
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
        pulsoSemana = false
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
            pulsoSemana = true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba por favor el numero de la semana`);


        }
        if (data === 'MES') {
            maquina = 'TODAS'
            mesMenu = 'MES'
            pulso = true
            pulsoSemana = true
            pulsoMes=true
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba por favor el mes y año, en formato mm-yyyy, Ejemplo: mes de Abril del 2023 = 04-2023`);


        }
        if (data === 'EREMAS') {
            maquina = 'TODASEREMAS'
            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            //bot.sendMessage(chatId, `Seleccionaste ${maquina}`);
            bot.sendMessage(chatId, `Ahora escriba la fecha en formato dd-mm-yyyy`);


        }
        if (data === 'INVENTARIOS') {

            bot.sendMessage(chatId, 'Por favor seleccione un almacén: ', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'AL-SEMELC1',
                                callback_data: 'AL-SEMELC1'
                            }
                        ],
                        [
                            {
                                text: 'AL-SEMELC2',
                                callback_data: 'AL-SEMELC2'
                            }
                        ],
                        [
                            {
                                text: 'AL-PRUEBAS',
                                callback_data: 'AL-PRUEBAS'
                            }
                        ],
                        [
                            {
                                text: 'AL-T05',
                                callback_data: 'AL-T05'
                            }
                        ],
                        [
                            {
                                text: 'AL-T06',
                                callback_data: 'AL-T06'
                            }
                        ],
                        [
                            {
                                text: 'AL-POR_FAC',
                                callback_data: 'AL-POR_FAC'
                            }
                        ],
                        [
                            {
                                text: 'AL-P03',
                                callback_data: 'AL-P03'
                            }
                        ],
                        [
                            {
                                text: 'AL-P02',
                                callback_data: 'AL-P02'
                            }
                        ],
                        [
                            {
                                text: 'AL-P01',
                                callback_data: 'AL-P01'
                            }
                        ],
                    ]
                }
            });

        }
        if (data === 'stop') {

            // Ejecuta la acción que deseas realizar cuando el usuario hace clic en "Ejecutar acción"
            bot.deleteMessage(chatId, query?.message?.message_id)
            bot.sendMessage(chatId, `Hasta luego, para volver a activar una consulta, escriba /start`);


        }
        // bot.deleteMessage(chatId, query.message.message_id )
    })
    bot.on('message', (msg) => {
        //? comprobar que si sea fecha lo que coloques

        if (semana != 'SEMANA' && maquina != 'TODASEREMAS' && pulsoSemana === false && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
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
        if (semana == 'SEMANA' && maquina != 'TODASEREMAS' && pulsoSemana == true && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
            numeroSemana = msg.text
            if (isNaN(numeroSemana) === true) {
                numeroSemana = null
                if (pulso === true && maquina && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
                    bot.sendMessage(msg.chat.id, `Tu semana seleccionada es incorrecta, vuelva a intentarlo`)
                    return

                }
            } else {
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
                semana = ''

            }

        }
        //?parte por mes
        if (mesMenu == 'MES' && maquina != 'TODASEREMAS' && pulsoMes == true && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
            numeroMes = msg.text

            //TODO
            fecha = msg.text.split('-');
            mes = fecha[0]
            year = fecha[1]
            if ( isNaN(mes) === true || isNaN(year) === true || mes > 12 || year < 2018 || mes.length==1) {
                numeroMes = null
                mes = null
                year = null;
                if (pulso === true && maquina && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
                    bot.sendMessage(msg.chat.id, `Tu mes y año seleccionado es incorrecto, 
                    por favor, vuelva manten el formato de mm-yyyy, Ejemplo: mes de Abril del 2023 = 04-2023`)
                    return

                }}
                if ( fecha.length === 2  && mes && year && mes <= 12) {
                    bot.sendMessage(msg.chat.id, '----', {
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    {
                                        text: `Pulsa aca para generar el reporte del mes  ${numeroMes} `,
                                        callback_data: '4'
                                    }
                                ]
                            ]
                        }
                    });
                    //  console.log(numeroSemana)
                    mesMenu = ''
    
                }
            //TODO
      
              
            

        }
        //TODO EREMAS 1
        if (semana != 'SEMANA' && pulsoSemana === false && maquina == 'TODASEREMAS' && msg.text !== '/start' && msg.text.toUpperCase() !== '/START') {
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
                bot.sendMessage(msg.chat.id, '--', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Pulsa aca para generar el reporte',
                                    callback_data: '1EREMAS'
                                }
                            ]
                        ]
                    }
                });

                //todo final de todo
                pulso = false
            }
        }
    })

    //callbacks luego de las fechas para seleccion un submenu, ese callbackquery esta siendo llamado en la seccion donde ya comprobamos que si puso fechas correctas
    bot.on('callback_query', async (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;
        const fecha2 = await obtenerFechaDeUnArchivo('./VFL QUERY SQL 2.xlsm')
        if (data === '3' || data === '1') {
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha2}`)
        }
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
   
               PD: Este desperdicio es netamente del proceso, sin ajustes por consumo.
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
        if (data === '3') {
            semana = '';
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
                respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['id_maqempaque2'] == maquinita && elemento['SEMANA2'] == numeroSemana && elemento['calidad'] == 1)
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
         //?esta seccion del menu 3 es para mostrar todo por mes se le asigno el numero 4
         if (data === '4') {
            mesMenu = '';
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
                respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['id_maqempaque2'] == maquinita && elemento['MES'] == mes  && elemento['Año'] == year && elemento['calidad'] == 1)
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
                        `-----------${maquinita}-----------mes ${numeroMes}-------
                        T1: ${Math.round(T1)} KG
                        T2: ${Math.round(T2)} KG
                        T3: ${Math.round(T3)} KG
                        TD: ${Math.round(TD)} KG
                        TN: ${Math.round(TN)} KG
                        TOTAL E1: ${Math.round(e1)} KG
                        ------------------------------
                     
                        `);
                }


                // console.log({maquina,mes,dia,year})
            });


        }
        //TODO EREMAS
        if (data === '1EREMAS' && maquina === 'TODASEREMAS') {
            let fecha = new Date();
            bot.sendMessage(chatId, `Obteniendo información de las recicladoras... por favor, espere...`);
            fecha = await obtenerFechaDeUnArchivo(rutaEremasRed);
            let resultado = await leerArchivoExcel3(rutaEremasRed, 'BD_RECICLADO');
            let respuestaFiltrada = [];
            respuestaFiltrada = resultado;
           // console.log(respuestaFiltrada)
            maquinas2.forEach(async maquinita => {
                let respuestaFiltrada = resultado;
                let e1 = 0
                let T1 = 0;
                let T2 = 0;
                let T3 = 0;
                let TD = 0;
                let TN = 0;
                let productos = [];
                let operadores = [];
                respuestaFiltrada = respuestaFiltrada.filter((elemento) => elemento['MAQUINA'] == maquinita && elemento['DIA'] == dia && elemento['MES2'] == mes && elemento['AÑO'] == year)
                  // console.log(respuestaFiltrada)
                //    console.log(maquina)
                respuestaFiltrada.forEach(async element => {
                    if (!productos.includes(element['MATERIAL'])) {
                        if (element['KG NETO'] > 0) {

                            productos.push(element['MATERIAL'])
                        }
                    }

                    if (element['TURNO'] == '1') {
                        T1 = T1 + element['KG NETO'];
                    }
                    if (element['TURNO'] == '2') {
                        T2 = T2 + element['KG NETO'];
                    }
                    if (element['TURNO'] == '3') {
                        T3 = T3 + element['KG NETO'];
                    }
                    if (element['TURNO'] == 'D') {
                        TD = TD + element['KG NETO'];
                    }
                    if (element['TURNO'] == 'N') {
                        TN = TN + element['KG NETO'];
                    }
                    //?TOTAL
                    e1 = e1 + element['KG NETO'];
                });
                //let respuestaString = JSON.stringify(resultado)
                setTimeout(() => {

                }, 1000);
                if (e1 <= 0) {
                    await bot.sendMessage(chatId, `${maquinita}: 0 KG`)
                } else {
                    bot.sendMessage(chatId,
                        `--${maquinita}---${dia}/${mes}/${year}-------
                   T1: ${Math.round(T1)} KG
                   T2: ${Math.round(T2)} KG
                   T3: ${Math.round(T3)} KG
                   TD: ${Math.round(TD)} KG
                   TN: ${Math.round(TN)} KG
                   TOTAL PROCESADO: ${Math.round(e1)} KG
                   --------------------------------
                   Productos involucrados: ${productos}
                        PD: Esta información no proviene del sistema venefoil, la misma es cargada manualmente todos los días.
    
                   `);
                }


                // console.log({maquina,mes,dia,year})
            });
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }


    })

    //? APARTADO DE LOS INVENTARIOS
    bot.on('callback_query', async (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;
        let fecha = Date;
        try {
       
            fecha = await obtenerFechaDeUnArchivo(rutaInvRed);

        } catch (error) {

        }


        if (data === 'AL-SEMELC1') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }
        if (data === 'AL-SEMELC2') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }  if (data === 'AL-PRUEBAS') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }
        if (data === 'AL-T05') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }
        if (data === 'AL-T06') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }
        if (data === 'AL-POR_FAC') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }
        if (data === 'AL-P03') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)

        }
        if (data === 'AL-P02') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }
        if (data === 'AL-P01') {
            const almacen = await obtenerInventario(data)
            if (almacen) {
                bot.sendMessage(chatId, '<code>' + almacen + '</code>', { parse_mode: 'HTML' });
            } else {
                bot.sendMessage(chatId, 'ALMACEN EN 0');
            }
            bot.sendMessage(chatId, `Fecha de la ultima actualización: ${fecha}`)
        }

        //ok
    })
    const obtenerInventario = async (data) => {
        //?obteniendo informacion de la ultima modificacion del archivo

        let productos = []
        let resultado = await leerArchivoExcel2(rutaInvRed, 0);
        let objeto = [];
        productos = resultado;
        productos = productos.filter((producto) => producto['UBICACION'] == data)
        productos.forEach(async element => {
            objeto.push({ Material: element['ALIAS_ART'], cantidad: element['CANT_EXISTENCIA'] + ' KG' })
        });
        let result = '';
        for (let i = 0; i < objeto.length; i++) {
            if (objeto[i] != undefined) {
                let values = Object.values(objeto[i]);
                result += values.join(':') + '\n';

            }
        }
        return result;
    }

    const obtenerFechaDeUnArchivo = (ruta) => {
        return new Promise((resolve, reject) => {
            fs.stat(ruta, (err, stats) => {
                if (err) {
                    console.error(err);
                    resolve(null)
                }

                const lastModified = stats.mtime;

                // console.log(`2 La última modificación del archivo fue el ${lastModified}`);
                resolve(lastModified)
            });

        })




    }
} catch (error) {
    // console.log(error)
}
