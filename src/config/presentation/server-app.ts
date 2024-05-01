import { CreateTable } from "../../domain/use-cases/create-table.use-case";
import { SaveFile } from "../../domain/use-cases/save-file.use-case";

interface IRunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {

  static run(options: IRunOptions): void {
    const {
      base, limit, showTable, fileName, fileDestination
    } = options;

    const table = new CreateTable().execute({ multiplier: base, limit });

    const saveTable = new SaveFile()
      .execute({
        fileContent: table,
        fileDestination: `${fileDestination}/${fileName}-${base}`
      });

    saveTable
      ? console.log('File created!')
      : console.log('File not created!');

    // Print table at console
    showTable && console.log(table);
  }
}