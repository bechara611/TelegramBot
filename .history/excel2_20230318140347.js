import shell from "shelljs";
import  {leerArchivoExcel} from "./excel.js";

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

export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD.xlsx')
   console.log(res)
}
