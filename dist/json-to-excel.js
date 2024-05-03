"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExcelTableFromJSON = void 0;
const path_1 = __importDefault(require("path"));
const exceljs = require('exceljs');
function createExcelTableFromJSON(jsonData) {
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Sheet-1');
    // Obtén las claves del primer objeto del JSON para crear las columnas en la tabla de Excel
    const columns = Object.keys(jsonData[0]);
    // Agrega las columnas a la hoja de cálculo
    worksheet.columns = columns.map(column => ({ header: column, key: column }));
    // Agrega los datos del JSON a la hoja de cálculo
    jsonData.forEach(data => {
        worksheet.addRow(data);
    });
    const outputPath = path_1.default.join(__dirname, 'outputs', 'output.xlsx'); // Asegúrate de incluir el nombre del archivo
    // Guarda el archivo de Excel
    workbook.xlsx.writeFile(outputPath)
        .then(() => {
        console.log('Tabla de Excel creada exitosamente.');
    })
        .catch((error) => {
        console.error('Error al crear la tabla de Excel:', error);
    });
}
exports.createExcelTableFromJSON = createExcelTableFromJSON;
