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

  // SECTION - Yargs and table Of Multiple
  // console.log(yargsPlugin);

  const { b: multiplier, l: limit, s: showLog } = yargsPlugin;

  // tableOfMultiple(multiplier, limit, showLog);

  // SECTION - ServerApplication

  ServerApp.run({ base: multiplier, limit, showTable: showLog });

}
