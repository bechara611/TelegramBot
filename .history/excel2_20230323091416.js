import { readFile } from 'fs/promises';
import { read, utils } from 'xlsx';



async function leerArchivoExcel(ruta,hoja=0) {
    try {
        let vector = []
        // Leer el archivo de Excel como un buffer
        const fileBuffer = await readFile(ruta);
        //?abrir y cerrar
     
        //?abrir y cerrar

        // Convertir el buffer en un objeto de hoja de cálculo
        const workbook = read(fileBuffer);
        //obtener el nombre de las hojas de calculos
        const hojasDeCalculo = workbook.SheetNames;
        //console.log({hojasDeCalculo})  //{ hojasDeCalculo: [ 'Hoja1' ] }

        // Convertir la hoja de cálculo en formato JSON
        const worksheet = workbook.Sheets['Cantidades de artículo - EXISTE']; // aca puedes poner el nombre de la hoja directamente
        const json = utils.sheet_to_json(worksheet);

        // Imprimir el JSON en la consola

        json.forEach((objeto) => {

            vector.push(objeto)
        })
        //console.log(vector)
      //  console.log(vector)
     
        return vector
        // vectorNuevo = vector.filter((elemento)=>elemento['campo 1']>=3)
       //  console.log(vector)
    } catch (error) {
        console.error(error);
        return []
    }
}


export { leerArchivoExcel }
resultado =  leerArchivoExcel('./VFL INV.xlsX');
