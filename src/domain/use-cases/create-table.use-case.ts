
export interface ICreateTable {
  execute: (options: IExecuteParams) => string;
}

interface IExecuteParams {
  multiplier: number;
  limit: number;
}

export class CreateTable implements ICreateTable {
  constructor(
    // DI - Dependency Injection
  ) {}

  execute({ multiplier, limit }: IExecuteParams): string {
    let index: number = 1;
    let outputMessage: string = `
    ================================
          Tabla del ${multiplier}
    ================================\n`;

    do {
      outputMessage += `${multiplier} x ${index} = ${multiplier * index}\n`;
      index++;
    } while (index <= limit);

    return outputMessage;
  }
}