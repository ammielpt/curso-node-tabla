const { crearArchivo1,crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors= require('colors');

//const argv=require('yargs')
//        .option('b',{
//              alias: 'base',
//              type: 'number',
//              demandOption:true
//        })
//        .check((argv,options)=>{
//                if(isNaN(argv.base)){
//                        throw 'La base tiene que ser un numero'
//                }
//                return true;
//        })
//        .argv;

//const argv=require('yargs')
//        .options({
//        'b':{
//              alias: 'base',
//              type: 'number',
//              demandOption:true
//        },
//        'l':{
//                alias: 'listar',
//                type:'boolean'
//        }})
//        .check((argv,options)=>{
//                if(isNaN(argv.base)){
//                        throw 'La base tiene que ser un numero'
//                }
//                return true;
//        })
//        .argv;

//const argv=require('yargs')
//        .option('b',{
//              alias: 'base',
//              type: 'number',
//              demandOption:true
//        })
//        .option('l',{
//                alias: 'listar',
//                type: 'boolean',
//                demandOption:true,
//                default:false
//          })
//        .check((argv,options)=>{
//                if(isNaN(argv.base)){
//                        throw 'La base tiene que ser un numero'
//                }
//                return true;
//        })
//        .argv;

console.clear();

//const base=2;

//console.log(process.argv)
console.log(argv)

base=argv.base;
listar=argv.listar;
hasta=argv.hasta;
console.log('base:yargs',argv.base);

//const [,,arg3='--base=5']= process.argv;
//const [, base=5]=arg3.split('=');

//console.log(base);
crearArchivo1(base,listar,hasta)
        .then(crearArchivo=>console.log(crearArchivo.rainbow,"creado"))
        .catch(err=>console.log(err));