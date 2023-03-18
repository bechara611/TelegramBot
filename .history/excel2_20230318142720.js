import shell from "shelljs";
import  {leerArchivoExcel} from "./excel.js";
import XLSX from 'xlsx'


export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD2.xlsm')
   console.log(res)
}
