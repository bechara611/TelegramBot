import shell from "shelljs";
import  {leerArchivoExcel} from "./excel.js";
import XLSX from 'xlsx'

shell.exec(`start  ${'./BD.xlsx'}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
 
    console.log(`stdout: ${stdout}`);
  });

  const archivoAbrirYCerrar = XLSX.readFile('./BD.xlsx')
  XLSX.writeFile(archivoAbrirYCerrar, './BD.xlsx', { bookType: 'xlsx', cellDates: true }, (err) => {
      if (err) {
          console.error(err);
      } else {
          console.log('Archivo guardado y cerrado');
      }
  });
export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD.xlsx')
   console.log(res)
}
