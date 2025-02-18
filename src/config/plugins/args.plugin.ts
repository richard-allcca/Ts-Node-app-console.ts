// Importar las dependencias necesarias
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// DESC - Este archivo configura yargs para manejar los argumentos de la línea de comandos

// Para procesos que necesiten validaciones asíncronas
export const yargsAsyncPlugin = yargs(hideBin(process.argv))
  // Param Required value: base de la tabla de multiplicar
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base',
  })
  // Param Default value: límite de la tabla de multiplicar
  .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
  })
  // Param bool value: mostrar la tabla de multiplicar
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  // Param string value: nombre del archivo
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  // Param string value: destino del archivo
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  // Validar que la base ingresada sea mayor a 0
  .check((argv, options) => {
    if (argv.b < 1) throw 'Error: base must be greater than 0';
    return true;
  })
  .parseAsync()
  .then(argv => {
    // Aquí puedes manejar los argumentos después de que se hayan parseado
    console.log('Arguments parsed:', argv);
  })
  .catch(err => {
    console.error('Error parsing arguments:', err);
  });

// Para procesos sincronos
export const yargsPlugin = yargs(hideBin(process.argv))
  // Param Required value: base de la tabla de multiplicar
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base',
  })
  // Param Default value: límite de la tabla de multiplicar
  .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
  })
  // Param bool value: mostrar la tabla de multiplicar
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  // Param string value: nombre del archivo
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  // Param string value: destino del archivo
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  // Validar que la base ingresada sea mayor a 0
  .check((argv, options) => {
    if (argv.b < 1) throw 'Error: base must be greater than 0';
    return true;
  })
  .parseSync();