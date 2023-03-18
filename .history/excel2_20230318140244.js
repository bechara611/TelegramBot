import { ShellString } from "shelljs";
import  shell from "./excel.js";

shell.exec(`cmd /c ${ruta}`, (error, stdout, stderr) => {
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

export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD.xlsx')
   console.log(res)
}
