const fs = require('fs');
const colors=require('colors');

const crearArchivo =(base=5)=>{

  return new Promise((resolve,reject)=>{
    try {
       console.log(colors.yellow(`====== Tabla del ${base} =======`))
       let salida="";
   
       for(let i=1; i<=10;i++){
           salida+=`${base} ${'x'.green} ${i} = ${base*i}\n`;
       }
       
       console.log(salida);
       
       fs.writeFileSync(`tabla-${base}.txt`, salida);
       
       //console.log(`tabla-${base}.txt creado`);
       resolve(`salida/tabla-${base}.txt creado`)
    } catch (error) {
        reject('No se pudo crear el archivo')
    }
    });
}


const crearArchivo1 =async(base=5,listar,hasta)=>{
      try {
         let salida="", consola="";
         for(let i=1; i<=hasta;i++){
             salida+=`${base} x ${i} = ${base*i}\n`;
             consola+=`${base} ${'x'.green} ${i} = ${base*i}\n`;
         }
         if(listar){
         console.log(colors.green(`====== Tabla del ${base} =======`))
         console.log(consola);
         }
         fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
         //console.log(`tabla-${base}.txt creado`);
         return `tabla-${base}.txt creado`;
      } catch (error) {
          throw error;
      }
  }

module.exports={
    crearArchivo,
    crearArchivo1
}