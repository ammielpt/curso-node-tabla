const argv=require('yargs')
        .option('b',{
              alias: 'base',
              type: 'number',
              demandOption:true,
              describe: 'Es la base numero'
        })
        .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption:true,
                default:false,
                describe: 'Lista la tabla'
          })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            demandOption:true,
            default: 10,
            describe: 'Hasta el numero'
        })
        .check((argv,options)=>{
                if(isNaN(argv.base)){
                        throw 'La base tiene que ser un numero'
                }
                return true;
        })
        .argv;

module.exports=argv;