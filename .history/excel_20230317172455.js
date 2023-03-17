import { readFile } from 'fs/promises';
import { read, utils } from 'xlsx';

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
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}

leerArchivoExcel('./archivo.xlsx');