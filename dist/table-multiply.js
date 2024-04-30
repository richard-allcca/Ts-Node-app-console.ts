"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableOfMultiple = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const tableOfMultiple = (multiplier, limit, showResult) => {
    const headerMessage = `
  ================================
        Tabla del ${multiplier}
  ================================
  `;
    let index = 1;
    let result = `${headerMessage}\n`;
    do {
        result += `${multiplier} x ${index} = ${multiplier * index}\n`;
        index++;
    } while (index <= limit);
    try {
        showResult && console.log(result);
        const outputPath = path_1.default.join(__dirname, 'outputs');
        // recursive crea carpetas anidadas si eso indicas en output path
        fs_1.default.mkdirSync(outputPath, { recursive: true });
        fs_1.default.writeFileSync(path_1.default.join(outputPath, `tabla-${multiplier}.txt`), result);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.tableOfMultiple = tableOfMultiple;
