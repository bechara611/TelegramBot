import shell from "shelljs";
import  {leerArchivoExcel} from "./excel.js";



export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD.xlsx')
   console.log(res)
}
