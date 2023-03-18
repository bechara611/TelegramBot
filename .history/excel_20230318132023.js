import { readFile } from 'fs/promises';
import { read, utils } from 'xlsx';
import XLSX from 'xlsx'

let vector= []
async function leerArchivoExcel(ruta) {
  try {
    // Leer el archivo de Excel como un buffer
    const fileBuffer = await readFile(ruta);
    //?abrir y cerrar
    const archivoAbrirYCerrar =  XLSX.readFile(ruta)
    XLSX.writeFile(archivoAbrirYCerrar, ruta, { bookType: 'xlsx' }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Archivo guardado y cerrado');
        }
    });
    //?abrir y cerrar
    
    // Convertir el buffer en un objeto de hoja de cálculo
    const workbook = read(fileBuffer);
    //obtener el nombre de las hojas de calculos
    const hojasDeCalculo = workbook.SheetNames;
    //console.log({hojasDeCalculo})  //{ hojasDeCalculo: [ 'Hoja1' ] }

    // Convertir la hoja de cálculo en formato JSON
    const worksheet = workbook.Sheets['INVENTARIO BOBINA']; // aca puedes poner el nombre de la hoja directamente
    const json = utils.sheet_to_json(worksheet);

    // Imprimir el JSON en la consola

    json.forEach((objeto)=>{
      
        vector.push(objeto)
    })
   //console.log(vector)
    return vector
    // vectorNuevo = vector.filter((elemento)=>elemento['campo 1']>=3)
    // console.log(vectorNuevo)
  } catch (error) {
    console.error(error);
  }
}
leerArchivoExcel('./archivo.xlsx')

export {leerArchivoExcel}

