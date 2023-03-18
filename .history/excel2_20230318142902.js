import shell from "shelljs";
import  {leerArchivoExcel} from "./excel.js";
import XLSX from 'xlsx'


export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD.xlsm')
   console.log(res)
}
