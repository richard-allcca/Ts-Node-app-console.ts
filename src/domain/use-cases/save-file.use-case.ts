import fs from "fs";

export interface SaveFileOptions {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}


export class SaveFile implements SaveFileOptions {

  constructor() {
    // Repository: StorageRepository
  }

  execute(options: Options): boolean {

    const {
      fileContent,
      fileDestination = 'outputs',
      fileName = 'table'
    } = options;

    try {

      // recursive crea carpetas anidadas si eso indicas en output path
      fs.mkdirSync(fileDestination, { recursive: true });

      // Guardar el resultado de la tabla en un archivo
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

      return true;
    } catch (error: any) {
      console.log(error.message);
      return false;
    }
  }
}