"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const table_multiply_1 = require("../../table-multiply");
class ServerApp {
    static run(options) {
        const { base, limit, showTable } = options;
        (0, table_multiply_1.tableOfMultiple)(base, limit, showTable);
        console.log('Server running...');
    }
}
exports.ServerApp = ServerApp;
