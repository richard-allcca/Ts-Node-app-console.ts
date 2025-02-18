import { yargsPlugin } from "./config/plugins/args.plugin";
import { ServerApp } from "./config/presentation/server-app";
import { tableOfMultiple } from "./table-multiply";
import { createExcelTableFromJSON } from './json-to-excel';

(
  async () => {
    await main();
    console.log('Ejected');
  }
)();

function main() {

  const {
    b: multiplier, l: limit, s: showLog, n: fileName, d: fileDestination
  } = yargsPlugin;

  ServerApp.run({ base: multiplier, limit, showTable: showLog, fileDestination, fileName });

}
