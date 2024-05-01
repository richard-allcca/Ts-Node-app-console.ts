import yards from 'yargs';
import { hideBin } from 'yargs/helpers';

// DESC - to use the arguments from the command line

// Para procesos que necesiten validaciones	asíncronas
// export const yargs = yards(process.argv)
//   .parseAsync()

// Para procesos sincronos
export const yargsPlugin = yards(hideBin(process.argv))
  // Param Required value
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base',
  })
  // Param Default value
  .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
  })
  // Param bool value (solo con usar -s es true)
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  // Validate parameters values
  .check((argv, options) => {
    if (argv.b < 1) throw 'Error: base must be greater than 0';
    return true;
  })
  .parseSync();