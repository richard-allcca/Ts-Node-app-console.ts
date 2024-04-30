"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const args_plugin_1 = require("./config/plugins/args.plugin");
const json_to_excel_1 = require("./json-to-excel");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
    console.log('Ejected');
}))();
function main() {
    // SECTION - Yargs and table Of Multiple
    // console.log(yargsPlugin);
    const { b: multiplier, l: limit, s: showLog } = args_plugin_1.yargsPlugin;
    // tableOfMultiple(multiplier, limit, showLog);
    // SECTION - ServerApplication
    // ServerApp.run({ base: multiplier, limit, showTable: showLog });
    // Ejemplo de uso
    const jsonData = [
        { name: 'teleshow', regex: '^(/(?:diarios|docs|teleshow)/[-\w/]*[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[\w-]+/)$' },
        { name: 'diarios', regex: '^((teleshow|diarios)/[-\w/]*\d{4}/\d{1,2}/\d{1,2}/[\w-]+/)$' },
        { name: 'ultimas', regex: '^((ultimas|diarios)/[-\w/]*\d{4}/\d{1,2}/\d{1,2}/[\w-]+/)$' },
        { name: 'test-final', regex: '^(/(?:diarios|docs|teleshow)/[-\w/]*[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[\w-]+/)$' },
    ];
    (0, json_to_excel_1.createExcelTableFromJSON)(jsonData);
}
