import { leerArchivoExcel } from "./excel.js";


export const excel2 =async () => {

   let res=  await leerArchivoExcel('./BD2.xlsx')
   console.log(res)
}
