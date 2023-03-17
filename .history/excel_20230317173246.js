import { readFile } from 'fs/promises';
import { read, utils } from 'xlsx';
let vector= []
let vectorNuevo=[]
async function leerArchivoExcel(ruta) {
  try {
    // Leer el archivo de Excel como un buffer
    const fileBuffer = await readFile(ruta);

    // Convertir el buffer en un objeto de hoja de cálculo
    const workbook = read(fileBuffer);

    // Convertir la hoja de cálculo en formato JSON
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = utils.sheet_to_json(worksheet);

    // Imprimir el JSON en la consola

    json.forEach((objeto)=>{
      
        vector.push(objeto)
    })
    console.log(vector)
    return vector
    // vectorNuevo = vector.filter((elemento)=>elemento['campo 1']>=3)
    // console.log(vectorNuevo)
  } catch (error) {
    console.error(error);
  }
}

export {leerArchivoExcel}

