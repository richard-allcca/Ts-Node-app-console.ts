"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yargsPlugin = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
// DESC - to use the arguments from the command line
// Para procesos que necesiten validaciones	asíncronas
// export const yargs = yards(process.argv)
//   .parseAsync()
// Para procesos sincronos
exports.yargsPlugin = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    // Param Required value
    .option('b', {
    alias: 'base',
    type: 'number',
    // demandOption: true,
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
    // Validate parameters values
    .check((argv, options) => {
    // if (argv.b < 1) throw 'Error: base must be greater than 0';
    return true;
})
    .parseSync();
